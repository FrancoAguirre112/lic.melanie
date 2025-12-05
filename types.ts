import React from 'react';

export interface Milestone {
  id: string;
  title: string;
  period?: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Approach {
  id: string;
  title: string;
  description?: string;
  iconName: string;
}

export interface ModalityItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  type: 'presencial' | 'online';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  imageUrl: string;
  link: string;
}