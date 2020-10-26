# Create mysql server based on the official image from the dockerhub
FROM mysql:latest as builder

# Add a database & root password
ENV MYSQL_DATABASE todo-database
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER deloitte
ENV MYSQL_PASSWORD deloitte@awesome

# Optionally, run initial scripts for creating tables
COPY ./sql-scripts/03-create-table.sql /docker-entrypoint-initdb.d/
COPY ./sql-scripts/04-create-dummy-data.sql /docker-entrypoint-initdb.d/
