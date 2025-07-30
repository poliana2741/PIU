from pydantic import BaseModel

class Tarefa(BaseModel):
    id: int
    nome: str
    concluida: bool
