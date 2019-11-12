package com.employee.managment.repository;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.employee.managment.entity.Employee;

@Repository
public class EmployeeCustomRepositoryImpl implements EmployeeCustomRepository {

	@PersistenceContext
    private EntityManager entityManager;
	@Override
	public List<Employee> search(Map<String, String> searchParams, long[] size ,Pageable pag) {

		

		StringBuilder q = new StringBuilder("select e from Employee e where");
		int count = 0;
		for(Entry<String, String> entry  : searchParams.entrySet()) 
		{
			
			q.append(" e." + entry.getKey()+" like '"+entry.getValue()+"%'");
			if(count < searchParams.size() - 1)
				q.append(" and");
			count++;
			
		}
		System.out.println(q);
		Query query = entityManager.createQuery(q.toString());
		
			
//		query.setFirstResult(pag.getPageNumber() * pag.getPageSize());
//		query.setMaxResults(pag.getPageSize());
//		
		Query que = entityManager.createQuery(q.toString());
		
		size[0] = que.getResultList().size();

		
		return query.getResultList();
	}

}
