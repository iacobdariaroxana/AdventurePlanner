using System.Linq.Expressions;

namespace AdventurePlannerBE.DB
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected PlannerContext PlannerContext { get; set; }

        protected RepositoryBase(PlannerContext plannerContext)
        {
            PlannerContext = plannerContext;
        }
        public IQueryable<T> FindAll()
        {
            return PlannerContext.Set<T>();
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return PlannerContext.Set<T>().Where(expression);
        }

        public void Create(T entity)
        {
            PlannerContext.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            PlannerContext.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            PlannerContext.Set<T>().Remove(entity);
        }
    }
}
