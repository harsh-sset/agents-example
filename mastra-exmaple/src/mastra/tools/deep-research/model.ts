import mongoose, { Schema, Document } from 'mongoose';
const RESEARCH_PIPELINE_PROGRESS_COLLECTION_NAME = 'research_pipeline_progress'

interface IStep {
  stepId: string;
  stepName: string;
  stepType: 'search' | 'analysis' | 'parsing';
  status: 'completed' | 'pending' | 'failed';
  metadata: any;
  input: any;
  startedAt?: Date;
  completedAt?: Date;
  duration?: number;
  output?: any;
}

const StepSchema = new Schema<IStep>({
  stepId: { type: String, required: true },
  stepName: { type: String, required: true },
  stepType: {
    type: String,
    enum: ['search', 'analysis', 'parsing'],
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'pending', 'failed'],
    required: true,
  },
  metadata: { type: Schema.Types.Mixed, default: {} },
  input: { type: Schema.Types.Mixed, default: {} },
  startedAt: { type: Date },
  completedAt: { type: Date },
  duration: { type: Number },
  output: { type: Schema.Types.Mixed },
});

export interface ResearchPipeline {
  pipelineName: string;
  pipelineType: 'preliminary' | 'deep';
  status: 'completed' | 'pending' | 'failed' | 'in_progress' | 'not_started';
  totalSteps: number;
  completedSteps: number;
  steps: IStep[];
  input: any;
  startedAt: Date;
  createdBy: string;
  initialQuery: string;
  initialQueryLowerCase: string;
  preliminaryResearchId?: string;
  metadata: any;
  updatedAt: Date;
  currentStep?: string;
  completedAt?: Date;
  output?: any;
}

export interface IResearchPipeline extends ResearchPipeline, Document {}

export const ResearchPipelineSchema = new Schema<IResearchPipeline>(
  {
    pipelineName: { type: String, required: true },
    pipelineType: {
      type: String,
      enum: ['preliminary', 'deep'],
      required: true,
    },
    status: {
      type: String,
      enum: ['completed', 'pending', 'failed', 'in_progress', 'not_started'],
      required: true,
    },
    totalSteps: { type: Number, required: true },
    completedSteps: { type: Number, required: true },
    steps: [StepSchema],
    input: { type: Schema.Types.Mixed, required: true },
    startedAt: { type: Date, required: true },
    createdBy: { type: String, required: true },
    initialQuery: { type: String, required: true },
    initialQueryLowerCase: { type: String, required: true },
    preliminaryResearchId: { type: String },
    metadata: { type: Schema.Types.Mixed, default: {} },
    updatedAt: { type: Date, required: true, default: Date.now },
    currentStep: { type: String },
    completedAt: { type: Date },
    output: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
    collection: RESEARCH_PIPELINE_PROGRESS_COLLECTION_NAME,
  }
);

export const ResearchPipelineModel =
  mongoose.models[RESEARCH_PIPELINE_PROGRESS_COLLECTION_NAME] ||
  mongoose.model<IResearchPipeline>(
    RESEARCH_PIPELINE_PROGRESS_COLLECTION_NAME,
    ResearchPipelineSchema
  );
