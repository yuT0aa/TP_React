function UserCard({ name, age, city, role }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}><strong>Âge :</strong> {age} ans</p>
      <p style={{ margin: '4px 0' }}><strong>Ville :</strong> {city}</p>
      <p style={{ margin: '4px 0' }}><strong>Rôle :</strong> {role}</p>
    </div>
  )
}

export default UserCard