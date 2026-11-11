FROM node:20-slim
RUN apt-get update && apt-get install -y git
WORKDIR /app
EXPOSE 5173
CMD ["bash"]