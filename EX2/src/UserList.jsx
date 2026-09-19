import UserCard from '../components/UserCard'

function UsersPage() {
  const users = [
    { id: 1, name: "Alice Martin", age: 28, city: "Paris", role: "Développeuse Frontend" },
    { id: 2, name: "Thomas Dubois", age: 34, city: "Lyon", role: "Chef de Projet" },
    { id: 3, name: "Sarah Benali", age: 25, city: "Marseille", role: "UI/UX Designer" },
    { id: 4, name: "Youssef El Amrani", age: 30, city: "Casablanca", role: "Développeur Backend" },
    { id: 5, name: "Emma Bernard", age: 22, city: "Lille", role: "Stagiaire Data" }
  ]

  return (
    <div>
      <h2>Exercice 2 — Liste des Utilisateurs</h2>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            city={user.city}
            role={user.role}
          />
        ))}
      </div>
    </div>
  )
};

export default UsersPage;