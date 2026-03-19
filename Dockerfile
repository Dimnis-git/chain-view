# Dockerfile for SvelteKit (development/preview)
FROM node:25-alpine

# set working directory
WORKDIR /app

# copy package manifests first to leverage cache
COPY package.json pnpm-lock.yaml ./

# install dependencies
RUN pnpm install --frozen-lockfile --prod=false

# copy app source
COPY . .

# build app
RUN pnpm build

EXPOSE 4173

CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4173"]
