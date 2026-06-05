import { z } from 'zod'

export const businessTypePresets = [
  'D2C Brand',
  'Local Business',
  'SaaS',
  'Real Estate',
] as const

export const budgetOptions = [
  'Under ₹50,000 / month',
  '₹50,000 - ₹1,00,000 / month',
  '₹1,00,000 - ₹2,50,000 / month',
  '₹2,50,000 - ₹5,00,000 / month',
  '₹5,00,000+ / month',
] as const

export const goalOptions = [
  'Generate more qualified leads',
  'Increase online purchases',
  'Improve ROAS on paid ads',
  'Grow local walk-ins or inquiries',
  'Build brand awareness in a new market',
] as const

export const aiStrategyRequestSchema = z.object({
  businessType: z.string().trim().min(2).max(80),
  budget: z.string().trim().min(3).max(60),
  goal: z.string().trim().min(3).max(120),
})

export const aiStrategyResponseSchema = z.object({
  strategy: z.string().trim().min(20).max(800),
  platforms: z.array(z.string().trim().min(2).max(80)).min(2).max(5),
  budgetSplit: z
    .array(
      z.object({
        channel: z.string().trim().min(2).max(80),
        percent: z.number().int().min(1).max(100),
        reason: z.string().trim().min(8).max(180),
      })
    )
    .min(2)
    .max(5),
  contentIdeas: z.array(z.string().trim().min(4).max(180)).min(3).max(5),
  quickWin: z.string().trim().min(10).max(220),
})

export type AiStrategyRequest = z.infer<typeof aiStrategyRequestSchema>
export type AiStrategyResponse = z.infer<typeof aiStrategyResponseSchema>

export const aiStrategyJsonSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    strategy: {
      type: 'string',
      description: 'A concise, practical growth strategy tailored to the business, budget, and goal.',
    },
    platforms: {
      type: 'array',
      minItems: 2,
      maxItems: 5,
      items: {
        type: 'string',
      },
      description: 'The most relevant channels or platforms to prioritize.',
    },
    budgetSplit: {
      type: 'array',
      minItems: 2,
      maxItems: 5,
      description: 'A realistic channel allocation that totals roughly 100 percent.',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          channel: {
            type: 'string',
          },
          percent: {
            type: 'integer',
          },
          reason: {
            type: 'string',
          },
        },
        required: ['channel', 'percent', 'reason'],
      },
    },
    contentIdeas: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'string',
      },
      description: '3 to 5 specific content ideas matched to the business and goal.',
    },
    quickWin: {
      type: 'string',
      description: 'One immediate action the business can take this week.',
    },
  },
  required: ['strategy', 'platforms', 'budgetSplit', 'contentIdeas', 'quickWin'],
} as const
