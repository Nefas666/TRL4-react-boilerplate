-- Seed some sample resources
insert into public.resources (title, description, category, type, tags) values
  ('Introduction to Web Development', 'Learn the basics of HTML, CSS, and JavaScript', 'Technology', 'course', array['web', 'programming', 'beginner']),
  ('Data Science Fundamentals', 'Master data analysis and machine learning basics', 'Technology', 'course', array['data', 'python', 'ml']),
  ('Merit-Based Scholarship 2025', 'Full tuition scholarship for outstanding students', 'Scholarships', 'scholarship', array['scholarship', 'full-tuition']),
  ('Research Grant Program', 'Funding for innovative research projects', 'Funding', 'funding', array['research', 'grant']),
  ('Career Development Workshop', 'Build your professional skills and network', 'Career', 'course', array['career', 'networking']),
  ('STEM Excellence Award', 'Scholarship for STEM students with high achievement', 'Scholarships', 'scholarship', array['stem', 'scholarship'])
on conflict do nothing;
