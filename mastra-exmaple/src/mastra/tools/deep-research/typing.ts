export interface DeepResearchOutput {
    opportunityOverview: OpportunityOverview;
    keySignalDetection: KeySignalDetection[];
    keyMetricsAnalysis: KeyMetricsAnalysis;
    potentialBuyerAnalysis: PotentialBuyerAnalysis[];
    mainMarketPlayers: MainMarketPlayer[];
    riskAssessment: RiskAssessment[];
    technicalChemicalAnalysis: TechnicalChemicalAnalysis;
    scoreGeneration: ScoreGeneration;
    roadmapGeneration: RoadmapGeneration;
    dataSources?: DataSource[];
  }
  export interface DataSource {
    type: 'patent' | 'news' | 'report' | 'website' | 'other';
    label: string;
    count: number;
    query: string;
  }
  
  export interface OpportunityOverview {
    title: string;
    description: string;
    explanationOfIdentifyingOpportunity: string;
    discoveryMethod: string;
  }
  
  export interface KeySignalDetection {
    title: string;
    confidenceLevel: number;
    signalDetectionMode: string;
    explanation: string;
  }
  
  export interface MarketSize {
    type: 'single' | 'range';
    value: number;
    range: [number, number];
    unit: 'M' | 'B' | 'T';
    year: number;
    explanation: string;
  }
  
  interface InvestmentRequired extends MarketSize {}
  interface ExpectedRoi extends MarketSize {}
  export interface RevenuePotential extends MarketSize {}
  
  interface TimeToMarket {
    type: 'range';
    value: [number, number];
    unit: 'months' | 'years';
    explanation: string;
  }
  
  interface ProjectedGrowth {
    value: string;
    year: number;
    explanation: string;
  }
  
  export interface KeyMetricsAnalysis {
    marketSize: KeyMetric | MarketSize;
    projectedGrowth: KeyMetric | ProjectedGrowth;
    timeToMarket: KeyMetric | TimeToMarket;
    investmentRequired: KeyMetric | InvestmentRequired;
    expectedRoi: KeyMetric | ExpectedRoi;
    revenuePotential: KeyMetric | RevenuePotential;
  }
  
  export interface KeyMetric {
    value: string;
    label?: string;
    explanation: string;
  }
  
  export interface PotentialBuyerAnalysis {
    name: string;
    industry: string;
    partnershipArea: string;
    whyInterest: string;
    interestLevel: number;
  }
  
  export interface MainMarketPlayer {
    name: string;
    industry: string;
    marketShare: string;
    marketShareExplanation: string;
  }
  
  export interface RiskAssessment {
    riskName: string;
    riskDescription: string;
    mitigationThought: string;
    mitigationPlan: string;
    riskImpact: string;
    impactExplanation: string;
  }
  
  export interface TechnicalChemicalAnalysis {
    chemicalResistance: ChemicalResistance;
    flexibilityRange: FlexibilityRange;
    biocompatibility: Biocompatibility;
    durability: Durability;
  }
  
  export interface ChemicalResistance {
    material: string;
    resistanceDetail: string;
  }
  
  export interface FlexibilityRange {
    minTemp: string;
    maxTemp: string;
    source: string;
  }
  
  export interface Biocompatibility {
    assessment: string;
    reference: string;
  }
  
  export interface Durability {
    detail: string;
    reference: string;
  }
  
  export interface ScoreGeneration {
    technologyTrendStrength: number;
    technologyTrendStrengthExplanation: string;
    marketGrowthValidation: number;
    marketGrowthValidationExplanation: string;
    materialFitAssessment: number;
    materialFitAssessmentExplanation: string;
    competitiveGapAnalysis: number;
    competitiveGapAnalysisExplanation: string;
  }
  
  export interface RoadmapGeneration {
    summary: string;
    steps: Step[];
  }
  
  export interface Step {
    stepName: string;
    stepDetails: string;
    stepExplanation: string;
  }
  