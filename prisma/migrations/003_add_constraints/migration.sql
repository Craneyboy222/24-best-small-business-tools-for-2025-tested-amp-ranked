/* Constraints migration */

ALTER TABLE reviews ADD CONSTRAINT fk_reviews_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_reviews_tool FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE;
ALTER TABLE rankings ADD CONSTRAINT fk_rankings_tool FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE;