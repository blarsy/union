cd /home/union
rm -rf web
mkdir -p web
unzip ./web.zip -d ./web/
cd /home/union/docker
docker compose down
docker compose build --no-cache
docker compose up -d
docker compose -f compose_build_time.yaml down
docker compose -f compose_build_time.yaml build --no-cache
docker compose -f compose_web.yaml down
docker compose -f compose_build_time.yaml up -d
docker compose -f compose_web.yaml build --no-cache
docker compose -f compose_build_time.yaml down
docker compose -f compose_web.yaml up -d