import imagem1 from '../../assets/images/img1.jpg';
import imagem2 from '../../assets/images/img2.jpg';
import imagem3 from '../../assets/images/img3.jpg';
import imagem4 from '../../assets/images/img4.jpg';

const tarefas = [
  {
    id: 1,
    title: 'Estudar React Native',
    description: 'Revisar componentes, props e estados para a aula da semana.',
    status: 'Pendente',
    photo: imagem1,
  },
  {
    id: 2,
    title: 'Criar atividade prática',
    description: 'Montar um exercício com FlatList e componentes reutilizáveis.',
    status: 'Concluída',
    photo: imagem2,
  },
  {
    id: 3,
    title: 'Atualizar material da turma',
    description: 'Adicionar exemplos com mock de dados e imagens online.',
    status: 'Pendente',
    photo: imagem3,
  },
  {
    id: 4,
    title: 'Publicar projeto no Git',
    description: 'Subir a versão inicial do app com README de instruções.',
    status: 'Concluída',
    photo: imagem4,
  },
];

export default tarefas;