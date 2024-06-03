--Add a comment here that explains the purpose of the table and sample data being inserted
--the purpose of this code, is to give off information. it's like a statistical database that shows the obvservations of time, and it's value for air quality.--
CREATE TABLE observations (
    ID SERIAL PRIMARY KEY,
    SiteID INT,
    ObservationTimeUTC TIMESTAMP,
    Value FLOAT
);

-- Insert some sample data
INSERT INTO observations (SiteID, ObservationTimeUTC, Value) VALUES
(1, '2024-05-01 12:00:00', 25.4),
(2, '2024-05-01 12:05:00', 26.1),
(1, '2024-05-01 12:10:00', 25.8),
(2, '2024-05-01 12:15:00', 26.3);
