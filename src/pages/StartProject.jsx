import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Mail, 
  Image as ImageIcon,
  ChevronDown
} from 'lucide-react';
import { SERVICES, getServiceBySlug } from '../data/servicesData';
import Footer from '../components/Footer';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function StartProject() {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceSlug = searchParams.get('service');

  const [selectedService, setSelectedService] = useState(null);
  const [productPhotos, setProductPhotos] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [referencePhotos, setReferencePhotos] = useState([]);
  const [contactMethod, setContactMethod] = useState('whatsapp'); // 'whatsapp' | 'email'
  const [contactValue, setContactValue] = useState('');
  const [brandName, setBrandName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Sync with URL query parameter
  useEffect(() => {
    if (serviceSlug) {
      const match = getServiceBySlug(serviceSlug);
      if (match) {
        setSelectedService(match);
      }
    }
  }, [serviceSlug]);

  const handleServiceChange = (slug) => {
    const match = getServiceBySlug(slug);
    setSelectedService(match);
    if (slug) {
      setSearchParams({ service: slug });
    } else {
      setSearchParams({});
    }
  };

  // Handle product photo files
  const handleProductFiles = (files) => {
    const fileList = Array.from(files);
    const newItems = fileList.map((file) => ({
      file,
      id: Math.random().toString(36).substring(7),
      previewUrl: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
    }));
    setProductPhotos((prev) => [...prev, ...newItems]);
    if (formErrors.productPhotos) {
      setFormErrors((prev) => ({ ...prev, productPhotos: null }));
    }
  };

  // Handle reference photo files
  const handleReferenceFiles = (files) => {
    const fileList = Array.from(files);
    const newItems = fileList.map((file) => ({
      file,
      id: Math.random().toString(36).substring(7),
      previewUrl: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
    }));
    setReferencePhotos((prev) => [...prev, ...newItems]);
  };

  const removeProductPhoto = (id) => {
    setProductPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const removeReferencePhoto = (id) => {
    setReferencePhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const validateForm = () => {
    const errors = {};
    if (productPhotos.length === 0) {
      errors.productPhotos = 'Please upload at least one product photo.';
    }
    if (!instructions.trim()) {
      errors.instructions = 'Please describe what you want us to create.';
    }
    if (!contactValue.trim()) {
      errors.contactValue = contactMethod === 'whatsapp' 
        ? 'Please enter your WhatsApp phone number.' 
        : 'Please enter your email address.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Front-end only simulated submission (structured for future Supabase client)
    const payload = {
      service: selectedService ? selectedService.slug : 'all-formats',
      brandName: brandName.trim(),
      instructions: instructions.trim(),
      contactMethod,
      contactValue: contactValue.trim(),
      productPhotosCount: productPhotos.length,
      referencePhotosCount: referencePhotos.length,
      submittedAt: new Date().toISOString(),
    };

    console.log('Project Intake Submission Payload:', payload);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const resetForm = () => {
    productPhotos.forEach((p) => p.previewUrl && URL.revokeObjectURL(p.previewUrl));
    referencePhotos.forEach((p) => p.previewUrl && URL.revokeObjectURL(p.previewUrl));
    setProductPhotos([]);
    setReferencePhotos([]);
    setInstructions('');
    setContactValue('');
    setBrandName('');
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <div className="min-h-screen pt-12">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-3">
              START YOUR PROJECT
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
              Turn your product photos into sales content.
            </h1>
            <p className="text-base text-secondary leading-relaxed">
              Upload your photos, tell us the look you want, and choose how we deliver your assets. No complicated onboarding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="intake-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-16"
              >
                {/* SELECTED SERVICE BAR */}
                <div className="p-6 rounded-2xl border border-border bg-surface shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-muted uppercase block mb-1">
                        SELECTED SERVICE
                      </span>
                      <div className="text-lg font-bold text-primary">
                        {selectedService ? selectedService.title : 'ALL FORMATS / GENERAL PRODUCTION'}
                      </div>
                      {selectedService && (
                        <p className="text-xs text-secondary mt-1">
                          {selectedService.description}
                        </p>
                      )}
                    </div>

                    {/* Change service dropdown */}
                    <div className="relative shrink-0">
                      <select
                        value={selectedService ? selectedService.slug : ''}
                        onChange={(e) => handleServiceChange(e.target.value)}
                        className="appearance-none bg-background border border-border text-xs font-semibold tracking-wider text-primary px-4 py-2.5 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Change selected service"
                      >
                        <option value="">All Formats</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-secondary absolute right-3 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* STEP 1: UPLOAD YOUR PRODUCT PHOTOS */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold tracking-tight text-primary">
                        1. UPLOAD YOUR PRODUCT PHOTOS
                      </h2>
                      <p className="text-xs sm:text-sm text-secondary">
                        Upload one or more photos of your product. High-resolution photos produce the best results.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-muted tracking-wider">REQUIRED</span>
                  </div>

                  {/* Drag and Drop Zone */}
                  <label 
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files) handleProductFiles(e.dataTransfer.files);
                    }}
                    className={`relative flex flex-col items-center justify-center p-8 sm:p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-colors bg-surface hover:bg-surface-subtle ${
                      formErrors.productPhotos ? 'border-red-500' : 'border-border hover:border-primary/40'
                    }`}
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) handleProductFiles(e.target.files);
                      }}
                      className="sr-only"
                    />
                    <Upload className="w-8 h-8 text-muted mb-3" />
                    <span className="text-sm font-semibold text-primary mb-1 text-center">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-muted text-center">
                      JPG, PNG, WEBP, HEIC up to 25MB each
                    </span>
                  </label>

                  {formErrors.productPhotos && (
                    <p className="text-xs text-red-600 font-medium">{formErrors.productPhotos}</p>
                  )}

                  {/* Uploaded Thumbnails */}
                  {productPhotos.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                      {productPhotos.map((photo) => (
                        <div
                          key={photo.id}
                          className="group relative rounded-xl overflow-hidden border border-border bg-surface aspect-square"
                        >
                          <img
                            src={photo.previewUrl}
                            alt={photo.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeProductPhoto(photo.id)}
                            className="absolute top-2 right-2 bg-primary/80 hover:bg-primary text-white p-1 rounded-full transition-colors opacity-90 group-hover:opacity-100"
                            aria-label={`Remove ${photo.name}`}
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <p className="text-[10px] text-white truncate">{photo.name}</p>
                            <p className="text-[9px] text-white/80">{photo.size}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* STEP 2: WHAT DO YOU WANT? */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold tracking-tight text-primary">
                        2. WHAT DO YOU WANT?
                      </h2>
                      <p className="text-xs sm:text-sm text-secondary">
                        Describe the visual direction, target platforms, angles, or specific look you have in mind.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-muted tracking-wider">REQUIRED</span>
                  </div>

                  <textarea
                    rows={5}
                    value={instructions}
                    onChange={(e) => {
                      setInstructions(e.target.value);
                      if (formErrors.instructions) {
                        setFormErrors((prev) => ({ ...prev, instructions: null }));
                      }
                    }}
                    placeholder="Tell us what you want to create... (e.g. 3 on-model lifestyle visuals in a bright apartment setting, and 2 Amazon marketplace images highlighting key product specs)"
                    className={`w-full p-4 rounded-2xl border text-sm text-primary bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed ${
                      formErrors.instructions ? 'border-red-500' : 'border-border'
                    }`}
                  />

                  {formErrors.instructions && (
                    <p className="text-xs text-red-600 font-medium">{formErrors.instructions}</p>
                  )}
                </div>

                {/* STEP 3: REFERENCE IMAGES (OPTIONAL) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold tracking-tight text-primary">
                        3. REFERENCE IMAGES
                      </h2>
                      <p className="text-xs sm:text-sm text-secondary">
                        Optional — add references if you have a specific lighting, composition, or aesthetic in mind.
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted tracking-wider">OPTIONAL</span>
                  </div>

                  <label 
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files) handleReferenceFiles(e.dataTransfer.files);
                    }}
                    className="flex flex-col items-center justify-center p-6 border border-dashed border-border rounded-2xl cursor-pointer bg-surface hover:bg-surface-subtle transition-colors"
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) handleReferenceFiles(e.target.files);
                      }}
                      className="sr-only"
                    />
                    <ImageIcon className="w-6 h-6 text-muted mb-2" />
                    <span className="text-xs font-semibold text-primary">
                      Add reference images
                    </span>
                  </label>

                  {/* Reference Thumbnails */}
                  {referencePhotos.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                      {referencePhotos.map((ref) => (
                        <div
                          key={ref.id}
                          className="group relative rounded-xl overflow-hidden border border-border bg-surface aspect-square"
                        >
                          <img
                            src={ref.previewUrl}
                            alt={ref.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeReferencePhoto(ref.id)}
                            className="absolute top-2 right-2 bg-primary/80 hover:bg-primary text-white p-1 rounded-full transition-colors opacity-90 group-hover:opacity-100"
                            aria-label={`Remove ${ref.name}`}
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <p className="text-[10px] text-white truncate">{ref.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* STEP 4: WHERE SHOULD WE SEND IT? */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-primary">
                      4. WHERE SHOULD WE SEND IT?
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary">
                      Choose your preferred communication channel for updates and final asset delivery.
                    </p>
                  </div>

                  {/* Channel Selector */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setContactMethod('whatsapp');
                        if (formErrors.contactValue) {
                          setFormErrors((prev) => ({ ...prev, contactValue: null }));
                        }
                      }}
                      className={`flex items-center space-x-3 p-4 rounded-2xl border text-left transition-all ${
                        contactMethod === 'whatsapp'
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-surface text-primary hover:border-border-strong'
                      }`}
                    >
                      <Smartphone className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider">WHATSAPP</div>
                        <div className={`text-[11px] ${contactMethod === 'whatsapp' ? 'text-white/80' : 'text-muted'}`}>
                          Fastest delivery & previews
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setContactMethod('email');
                        if (formErrors.contactValue) {
                          setFormErrors((prev) => ({ ...prev, contactValue: null }));
                        }
                      }}
                      className={`flex items-center space-x-3 p-4 rounded-2xl border text-left transition-all ${
                        contactMethod === 'email'
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-surface text-primary hover:border-border-strong'
                      }`}
                    >
                      <Mail className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider">EMAIL</div>
                        <div className={`text-[11px] ${contactMethod === 'email' ? 'text-white/80' : 'text-muted'}`}>
                          Direct to your inbox
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Dynamic Contact Input */}
                  <div className="space-y-3">
                    <label 
                      htmlFor="contactField" 
                      className="block text-xs font-bold tracking-wider text-muted uppercase"
                    >
                      {contactMethod === 'whatsapp' ? 'WhatsApp Phone Number' : 'Email Address'}
                    </label>
                    <input
                      id="contactField"
                      type={contactMethod === 'whatsapp' ? 'tel' : 'email'}
                      value={contactValue}
                      onChange={(e) => {
                        setContactValue(e.target.value);
                        if (formErrors.contactValue) {
                          setFormErrors((prev) => ({ ...prev, contactValue: null }));
                        }
                      }}
                      placeholder={contactMethod === 'whatsapp' ? '+1 (555) 000-0000 or +91 98765 43210' : 'yourname@brand.com'}
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-primary bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                        formErrors.contactValue ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {formErrors.contactValue && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.contactValue}</p>
                    )}
                  </div>

                  {/* Optional Brand Name */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="brandField" 
                      className="block text-xs font-bold tracking-wider text-muted uppercase"
                    >
                      Brand or Store Name <span className="font-normal lowercase text-[11px]">(optional)</span>
                    </label>
                    <input
                      id="brandField"
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Acme Studio, Lumina Beauty"
                      className="w-full px-4 py-3.5 rounded-2xl border border-border text-sm text-primary bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6 border-t border-border">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center space-x-3 bg-primary text-white text-sm font-semibold tracking-wider py-4 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'PROCESSING REQUEST...' : 'SUBMIT PROJECT'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-muted mt-3">
                    Zero upfront payment required. We review your images and confirm deliverables first.
                  </p>
                </div>
              </motion.form>
            ) : (
              /* SUCCESS CONFIRMATION */
              <motion.div
                key="intake-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: luxuryEase }}
                className="p-8 sm:p-12 rounded-3xl border border-border bg-surface shadow-sm text-center max-w-xl mx-auto space-y-6"
              >
                <div className="w-14 h-14 bg-surface-subtle rounded-full flex items-center justify-center mx-auto text-primary">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-2">
                    PROJECT RECEIVED.
                  </h2>
                  <p className="text-base text-secondary leading-relaxed">
                    We'll review your request and get back to you shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-subtle border border-border text-xs text-secondary leading-relaxed">
                  Most projects are delivered within 24 hours. We'll reach out via{' '}
                  <span className="font-semibold text-primary capitalize">{contactMethod}</span> at{' '}
                  <span className="font-semibold text-primary">{contactValue}</span>.
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full sm:w-auto text-xs font-semibold tracking-wider text-primary border border-border px-6 py-3 rounded-full hover:bg-surface-subtle transition-colors"
                  >
                    SUBMIT ANOTHER PROJECT
                  </button>

                  <Link
                    to="/"
                    className="w-full sm:w-auto text-xs font-semibold tracking-wider bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors"
                  >
                    BACK TO HOME
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
