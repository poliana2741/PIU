from fastapi import FastAPI, HTTPException
from typing import List
from models import Tarefa

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware #usado pra poder usar em uma att de react

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos
    allow_headers=["*"],  # Permite todos os headers
)

# Simulação de banco de dados em memória
banco_tarefas: List[Tarefa] = []

@app.get("/tarefas/", response_model=List[Tarefa])
def listar_tarefas():
    return banco_tarefas

@app.post("/tarefas/", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    for t in banco_tarefas:
        if t.id == tarefa.id:
            raise HTTPException(status_code=400, detail="ID já existe")
    banco_tarefas.append(tarefa)
    return tarefa

@app.put("/tarefas/{tarefa_id}", response_model=Tarefa)
def atualizar_tarefa(tarefa_id: int, nova_tarefa: Tarefa):
    for index, tarefa in enumerate(banco_tarefas):
        if tarefa.id == tarefa_id:
            banco_tarefas[index] = nova_tarefa
            return nova_tarefa
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")

@app.delete("/tarefas/{tarefa_id}")
def deletar_tarefa(tarefa_id: int):
    for tarefa in banco_tarefas:
        if tarefa.id == tarefa_id:
            banco_tarefas.remove(tarefa)
            return {"mensagem": "Tarefa deletada com sucesso"}
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")
