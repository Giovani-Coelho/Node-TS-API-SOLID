import express from 'express'
import SwaggerUi from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())
// falar a rota que vai ficar a documentacao, chamar o servidor, e passar um setup
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile))

// importa todas as rotas que serao utilizadas
app.use(router)

app.listen(3333, () => console.log('Server is running'))

/*
⠄⠠⢀⠐⡀⢐⠐⠐⠄⠂⠐⠄⠂⠐⠄⠐⠄⠂⠐⠈⠠⠑⠨⠢⡊⠔⡐⠄
⠄⠂⠠⠐⠄⠄⡀⠄⠂⠄⠄⠄⠄⠄⠄⠄⠂⠄⠄⠄⢀⠄⡀⠄⠈⠨⠠⡁
⠄⠈⠄⠄⡀⢂⠠⠐⢀⠂⠠⠈⠄⠂⠄⠄⠄⠄⠄⠈⠄⠠⠄⠂⡀⠄⠈⠐
⠄⠄⠄⡂⡐⠠⡂⠅⡂⠌⡐⠈⠄⠨⢀⠂⡁⠌⠠⡁⡂⠅⠌⠄⢂⠠⠄⠄
⠄⠄⢂⠢⢨⣶⡾⢷⣦⡅⡂⠅⡡⢁⠂⡂⡂⢅⢑⣴⣾⠾⣮⣌⢐⠠⠄⠄
⠄⠄⢂⢊⢿⡏⠡⠂⢽⡗⢌⢂⠢⡁⠪⡐⠄⢕⢸⣿⠑⠡⢸⡿⢐⠨⠄⠄
⠄⠄⠅⡢⡙⠿⣾⢼⠟⡕⡑⢔⠡⡊⢌⠢⡑⡑⡌⡻⢷⢷⠟⢍⠢⡁⠂⠄
⠄⠄⠌⡂⡪⡑⡆⣇⣣⣱⣸⣰⣱⣜⣬⣪⣬⣦⣣⣎⣖⣔⣕⢅⢕⠨⠄⠄
⠄⠄⡑⣬⣺⡾⣿⣿⣻⣯⣿⣟⣿⣽⣿⣻⣿⣾⢿⣻⣿⣻⣯⣿⣲⢅⠄⠄
⠄⠄⢪⢗⣯⡏⠙⣯⣿⣯⣷⣿⣿⣽⣾⣿⢷⣿⡿⣿⣻⠝⢓⡷⡯⡣⠄⠁
⠄⠄⠈⢝⢞⡿⣦⡀⠙⠯⢿⢷⣿⣽⢿⣾⢿⡯⡟⠏⢁⢤⡿⡝⡕⠁⠄⡀
⠄⠄⠄⠄⠑⠝⣗⣟⡷⣤⣀⣁⠈⠈⠉⠊⣁⡠⣤⢶⣻⢽⠱⠑⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠐⠸⠹⠽⡽⣽⣻⣻⣟⣟⣷⣻⢽⢫⠣⠃⠄⠄⠄⠄⠄⠁
⠄⠄⠄⠄⠄⠄⠄⠄⠈⠁⠣⢣⢓⢗⢳⢹⢸⠸⠈⡀⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄I CAN SEE YOU⠄⠄⠄⠄⠄⠄⠄⠄⠄
*/
