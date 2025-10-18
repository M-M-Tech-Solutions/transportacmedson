## 🐋 Acessando o MySQL no Container

Após subir os containers com:

```bash
docker compose up -d
você pode acessar o banco de dados MySQL de diferentes formas:

🧭 1️⃣ Listar containers em execução
bash
Copiar código
docker ps
Exemplo de saída:

nginx
Copiar código
CONTAINER ID   IMAGE          STATUS          PORTS                     NAMES
abc123def456   mysql:latest   Up 2 minutes    0.0.0.0:3307->3306/tcp    acm-mysql
Anote o nome do container, geralmente acm-mysql.

🐚 2️⃣ Entrar no terminal do container
bash
Copiar código
docker exec -it acm-mysql bash
💾 3️⃣ Acessar o MySQL dentro do container
Dentro do container, use:

bash
Copiar código
mysql -u root -p
Digite a senha configurada no docker-compose.yml (exemplo: root).

⚡ 4️⃣ Acessar diretamente do host (sem entrar no container)
Se o docker-compose.yml estiver mapeando a porta 3307:3306, você pode conectar-se diretamente:

bash
Copiar código
mysql -h 127.0.0.1 -P 3307 -u root -p
🧱 5️⃣ Comandos úteis
Ação	Comando
Ver containers rodando	docker ps
Entrar no container	docker exec -it acm-mysql bash
Acessar o MySQL dentro do container	mysql -u root -p
Acessar MySQL pelo host	mysql -h 127.0.0.1 -P 3307 -u root -p

💡 Dica:
Você pode alterar a porta externa (3307) no docker-compose.yml se ela estiver em uso no seu sistema.

yaml
Copiar código

---

Quer que eu adicione também uma seção no markdown mostrando **como criar o banco e usuário** logo após acessar o MySQL (por exemplo, comandos `CREATE DATABASE` e `GRANT`)?






