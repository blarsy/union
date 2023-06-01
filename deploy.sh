# make sure you upload your SSH key to the target server first:
# ssh-copy-id -i ~/.ssh/id_rsa.pub YOUR_USER_NAME@IP_ADDRESS_OF_THE_SERVER
# ssh-copy-id -i ~/.ssh/id_rsa.pub root@45.91.169.85

ssh root@45.91.169.85 "mkdir -p /home/union/docker;"
# copy docker nocodb files
scp -rp ./docker/prod/* root@45.91.169.85:/home/union/docker
scp -rp ./docker/prod/.env root@45.91.169.85:/home/union/docker

# copy settings file
scp -rp ./.env.production root@45.91.169.85:/home/union
# Zip web build files
rm ./web.zip
cd .next
zip -r -q --symlinks ../web.zip ./static ./standalone ../next.config.js
cd ..
# copy other files
scp -rp public/ ./web.zip *.js *.json yarn.lock root@45.91.169.85:/home/union

ssh root@45.91.169.85 "sh " < ./remote.sh