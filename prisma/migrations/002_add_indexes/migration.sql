/* Indexes migration */

CREATE INDEX idx_tools_name ON tools(name);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_tool_id ON reviews(tool_id);
CREATE INDEX idx_rankings_tool_id ON rankings(tool_id);
CREATE INDEX idx_users_email ON users(email);