docker build --no-cache -f SQL\Dockerfile.PostgreSql -t photo/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t photo/app ../..
