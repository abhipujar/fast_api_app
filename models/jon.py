from sqlalchemy import Column,Integer,String,Enum,ForeignKey,relationship
from models.company import Company
from sqlalchemy.orm import declerative_base
from database import Base,engine,SessionLocal

Base=declerative_base()

class Job(Base):
    __tablename__="jobs"
    id=Column(Integer,primary_key=True,index=True)
    title=Column(String,nullable=False)
    description=Column(Integer)
    salary=Column(Integer)
    company_id=Column(Integer,ForeignKey("companies.id"))

    company=relationship("Company",back_populates="jobs")
