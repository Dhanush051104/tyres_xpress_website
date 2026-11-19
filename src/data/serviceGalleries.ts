/**
 * Service Image Gallery Registry
 * Independent multi-image collections for services with interactive carousels.
 * Designed to easily support an unlimited number of authentic photographs as they become available.
 */

import { getImageMeta } from '@/data/imageManifest';

export interface ServiceSlide {
  id: string;
  title: string;
  caption: string;
  targetPath: string;
  alt: string;
  placeholderId: string;
  badge?: string;
}

export interface ServiceGallery {
  serviceId: string;
  serviceSlug: string;
  serviceTitle: string;
  aspectRatio: string;
  slides: ServiceSlide[];
}

export const SERVICE_GALLERIES: Record<string, ServiceGallery> = {
  // 1. IMG-002: Multi-Brand Car & Two-Wheeler Tyres
  tyres: {
    serviceId: 'tyres',
    serviceSlug: 'multi-brand-tyres',
    serviceTitle: 'Multi-Brand Car & Two-Wheeler Tyres',
    aspectRatio: '4/3',
    slides: [
      {
        id: 'IMG-002-1',
        title: 'Passenger Car Tyre Fitment',
        caption: 'Touchless leverless mounting machinery for passenger car & SUV tyres',
        targetPath: '/images/services/tyre-fitting.jpg',
        alt: 'Multi-Brand Car Tyre Fitting on Touchless Changer at TyresXpress',
        placeholderId: 'IMG-002',
      },
      {
        id: 'IMG-002-2',
        title: 'Two-Wheeler & Superbike Tyre Bay',
        caption: 'Specialized wheel clamping for commuter bikes, sports radials, and scooters',
        targetPath: '/images/services/tyre-fitting-2w.jpg',
        alt: 'Two-Wheeler & Superbike Tyre Fitment Bay at TyresXpress Bengaluru',
        placeholderId: 'IMG-002-2W',
      },
      {
        id: 'IMG-002-3',
        title: 'SUV & 4x4 All-Terrain Tyre Mounting',
        caption: 'Heavy-duty all-terrain tyre fitment for Mahindra Thar, Scorpio, and Fortuner',
        targetPath: '/images/services/tyre-fitting-suv.jpg',
        alt: '4x4 & SUV All-Terrain Tyre Mounting at TyresXpress Workshop',
        placeholderId: 'IMG-002-SUV',
      },
      {
        id: 'IMG-002-4',
        title: 'Commercial Fleet & Light Truck Tyres',
        caption: 'Heavy-duty commercial van, pickup, and light truck tyre replacement services',
        targetPath: '/images/services/tyre-fitting-commercial.jpg',
        alt: 'Commercial Fleet and Light Truck Tyre Fitting at TyresXpress Bengaluru',
        placeholderId: 'IMG-002-COMM',
      },
    ],
  },

  // 2. IMG-003: Premium Alloy Wheels
  alloys: {
    serviceId: 'alloys',
    serviceSlug: 'alloy-wheels',
    serviceTitle: 'Premium Alloy Wheels',
    aspectRatio: '4/3',
    slides: [
      {
        id: 'IMG-003-1',
        title: 'Showroom Alloy Wheels Wall',
        caption: 'Display collection of diamond-cut, matte black, and gunmetal alloy wheels',
        targetPath: '/images/services/alloy-wheels.jpg',
        alt: 'Showroom Alloy Wheels Display Collection at TyresXpress Bengaluru',
        placeholderId: 'IMG-003',
      },
      {
        id: 'IMG-003-2',
        title: 'Custom PCD & Offset Fitment',
        caption: 'Calibrated hub-centering rings and precision lug torquing for Indian roads',
        targetPath: '/images/services/alloy-wheels-fitment.jpg',
        alt: 'Precision PCD and Hub Centric Ring Alloy Wheel Fitment',
        placeholderId: 'IMG-003-PCD',
      },
      {
        id: 'IMG-003-3',
        title: 'Deep Concave & SUV Off-Road Alloys',
        caption: 'JWL / VIA certified rugged concave alloys for Thar, Scorpio-N, and Creta',
        targetPath: '/images/services/alloy-wheels-suv.jpg',
        alt: 'Deep Concave SUV Off-Road Alloy Wheels at TyresXpress',
        placeholderId: 'IMG-003-SUV',
      },
      {
        id: 'IMG-003-4',
        title: 'Flow-Formed & Forged Performance Wheels',
        caption: 'Ultra-lightweight track-spec and forged wheels engineered for performance vehicles',
        targetPath: '/images/services/alloy-wheels-forged.jpg',
        alt: 'Ultra-Lightweight Flow-Formed and Forged Performance Alloy Wheels at TyresXpress',
        placeholderId: 'IMG-003-FORGED',
      },
    ],
  },
};

/**
 * Helper to check if a service has a multi-image carousel configured.
 */
export function getServiceGallery(serviceIdOrSlug: string): ServiceGallery | undefined {
  return (
    SERVICE_GALLERIES[serviceIdOrSlug] ||
    Object.values(SERVICE_GALLERIES).find(
      (g) => g.serviceSlug === serviceIdOrSlug || g.serviceId === serviceIdOrSlug
    )
  );
}
