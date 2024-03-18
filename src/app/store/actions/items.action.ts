import { createAction } from '@ngrx/store';

export const carregarFilmes = createAction('[Meu Componente] Carregar Filmes');
export const adicionarFilme = createAction('[Meu Componente] Adicionar Filme', (filme: Filme) => ({ filme }));
export const atualizarFilme = createAction('[Meu Componente] Atualizar Filme', (filme: Filme) => ({ filme }));
