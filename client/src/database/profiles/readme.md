CREATE TABLE profiles (
profile_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
school TEXT NOT NULL,
major TEXT NOT NULL,
location TEXT NOT NULL,
linkedin_link TEXT,
github_link TEXT,
portfolio_link TEXT,
skills TEXT[],
languages TEXT[],
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);
