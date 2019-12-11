# Mobile Gympoint

## App Mobile react native desenvolvido no treinamento GoStack Bootcamp [Rocketseat](https://rocketseat.com.br)

<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-mobile/master/assets/logo.png">
</h1>

## Pré requesitos

- OS: Windows, Mac ou Linux
- Softwares: Emulador Android, react-native de forma global, Node , NPM e Yarn

## Como utilizar

- Download / Clone o repositório:

  ```
  git clone https://github.com/davidfaria/gympoint-mobile.git
  ```

- Instalando as dependências do package.json:

  ```
  cd gympoint-mobile && yarn install
  ```

- Configurar as variáveis de ambiente

  ```
  cp .env.example .env
  ```

- ATENÇÃO: Habilitar as comunicação do emulador com (API, reactotron)

  **_Obs. Habite as portas que você está utilizando_**

  ```
  adb reverse tcp:3333 tcp:3333
  adb reverse tcp:4444 tcp:4444
  adb reverse tcp:8081 tcp:8081
  adb reverse tcp:9090 tcp:9090
  ```

* Instalar App Mobile no emulador (ANDROID)

  ```
  react-native run-android
  ```

* Inicializar App Mobile

  ```
  react-native start
  ```

* Abrir app no emulador

  **_Obs. Você precisa realizar o cadastro do aluno
  pelo App Web e entrar com o ID do cadastro, provavelmente
  será o Código 1 por ser o primeiro aluno._**

* Veja como preparar o ambiente nos repositórios:

  BACKEND - https://github.com/davidfaria/gympoint-backend

  WEB - https://github.com/davidfaria/gympoint-frontend

![localhost](https://raw.githubusercontent.com/davidfaria/gympoint-mobile/master/assets/mobile.gif)
