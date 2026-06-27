from pydantic import BaseModel
from typing import Optional

class CompanyBase(BaseModel):
    name: str
    email: str
    phone: str

class CompanyUpdate(CompanyBase):
    pass

class CompanyUpdate(BaseModel):
    name: Optional[str]= None
    email: Optional[str]=None
    phone: Optional[str]=None
    