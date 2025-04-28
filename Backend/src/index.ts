import express from 'express';
import sociosRoutes from '../src/routes/sociosRoutes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/members', sociosRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de membresías de Café Aurora');
});

app.listen(PORT, () => {console.log(`Servidor de Café Aurora corriendo en http://localhost:${PORT}`);});