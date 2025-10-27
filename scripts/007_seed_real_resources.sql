-- Clear existing mock resources and add real learning resources
DELETE FROM public.resources;

-- External link resources (no file upload needed)
INSERT INTO public.resources (title, description, category, type, url, tags, file_type) VALUES
(
  'The Global Soil Partnership',
  'FAO''s comprehensive platform for sustainable soil management, providing global guidelines, data, and resources for soil health and land management.',
  'Soil Science',
  'article',
  'https://www.fao.org/land-water/land/httpwwwfaoorgsoils-portalen/en/',
  ARRAY['soil health', 'sustainable agriculture', 'FAO', 'global partnership'],
  'external'
),
(
  'SOILSCAPE - Spreading Open and Inclusive Literacy',
  'UNESCO initiative promoting soil literacy and culture through artistic practices and education, fostering awareness of soil''s critical role in sustainability.',
  'Education',
  'article',
  'https://www.unesco.org/en/articles/spreading-open-and-inclusive-literacy-and-soil-culture-through-artistic-practices-and-education-0',
  ARRAY['soil literacy', 'education', 'UNESCO', 'art', 'culture'],
  'external'
);

-- PDF resources (URLs will be updated after upload to Supabase storage)
-- Format: https://[your-supabase-project].supabase.co/storage/v1/object/public/learning-resources/[filename].pdf

INSERT INTO public.resources (title, description, category, type, file_type, tags, file_url) VALUES
(
  'What Is Regenerative Agriculture?',
  'A comprehensive review of scholar and practitioner definitions of regenerative agriculture, analyzing processes and outcomes to provide clarity on this emerging agricultural paradigm.',
  'Regenerative Agriculture',
  'article',
  'application/pdf',
  ARRAY['regenerative agriculture', 'sustainable farming', 'research', 'definitions'],
  'PLACEHOLDER_regenerative_agriculture.pdf'
),
(
  'IPCC Special Report on Climate Change and Land',
  'Special report covering climate change, desertification, land degradation, sustainable land management, food security, and greenhouse gas fluxes in terrestrial ecosystems.',
  'Climate Science',
  'article',
  'application/pdf',
  ARRAY['climate change', 'IPCC', 'land degradation', 'food security', 'greenhouse gases'],
  'PLACEHOLDER_ipcc_land_report.pdf'
),
(
  'Compost: Truth or Consequences',
  'An in-depth analysis of composting practices, examining the science behind effective composting and its environmental impacts on soil health and carbon sequestration.',
  'Soil Science',
  'article',
  'application/pdf',
  ARRAY['compost', 'soil health', 'organic matter', 'carbon sequestration'],
  'PLACEHOLDER_compost_truth.pdf'
),
(
  'Soil Health Principles (USDA NRCS)',
  'Official USDA Natural Resources Conservation Service guide outlining fundamental principles for maintaining and improving soil health in agricultural systems.',
  'Soil Science',
  'article',
  'application/pdf',
  ARRAY['soil health', 'USDA', 'NRCS', 'conservation', 'best practices'],
  'PLACEHOLDER_soil_health_principles.pdf'
),
(
  'AI for Sustainable Farming (EU JRC)',
  'European Union Joint Research Centre report exploring artificial intelligence applications in sustainable agriculture, precision farming, and environmental monitoring.',
  'Technology',
  'article',
  'application/pdf',
  ARRAY['AI', 'sustainable farming', 'precision agriculture', 'EU', 'technology'],
  'PLACEHOLDER_ai_sustainable_farming.pdf'
),
(
  'Biodiversity Mapping Starter Kit',
  'Practical guide for mapping and monitoring biodiversity in agricultural landscapes, including tools, methodologies, and best practices for conservation.',
  'Biodiversity',
  'article',
  'application/pdf',
  ARRAY['biodiversity', 'mapping', 'conservation', 'monitoring', 'tools'],
  'PLACEHOLDER_biodiversity_mapping.pdf'
),
(
  'EU Opportunities for Green Entrepreneurship',
  'Comprehensive overview of funding opportunities, programs, and support mechanisms for green entrepreneurs in the European Union focusing on sustainable agriculture.',
  'Funding',
  'funding',
  'application/pdf',
  ARRAY['funding', 'entrepreneurship', 'EU', 'green business', 'opportunities'],
  'PLACEHOLDER_eu_green_opportunities.pdf'
);
