import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles'
import Button from '../components/Button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const alreadyExist = repos.find(repo => repo.id === data.id);

      if (!alreadyExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      } 
        alert('Repositório não encontrado.');
    }

  }

  const handleDeleteRepo = (id) => {
    setRepos(repos.filter(r => r.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} alt='logo do GitHub' className='logoGit' />
      <Input value={currentRepo} onChange={event => setCurrentRepo(event.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} onClick={() => handleDeleteRepo(repo.id)} />)}
    </Container>
  );
}

export default App;
