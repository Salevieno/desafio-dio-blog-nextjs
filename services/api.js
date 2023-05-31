import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://wdfljsdujpzloxeuxtda.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkZmxqc2R1anB6bG94ZXV4dGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0ODU0OTAsImV4cCI6MjAwMTA2MTQ5MH0.KwAEB9rYOX2v6gbyMGYJz0pTkjhAudLdJQTJja73tso",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkZmxqc2R1anB6bG94ZXV4dGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0ODU0OTAsImV4cCI6MjAwMTA2MTQ5MH0.KwAEB9rYOX2v6gbyMGYJz0pTkjhAudLdJQTJja73tso"}
})