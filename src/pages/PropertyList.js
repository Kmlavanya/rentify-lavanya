import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa'; 
import './SellerDashboard.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    
    const sampleData = [
      { _id: '1', name: 'SS Property', area: 'Guindy' },
      { _id: '2', name: 'Kumaran Property ', area: 'Saravanmpatti' },
      { _id: '3', name: 'Febi Property ', area: 'Hosur' }
    ];
    setProperties(sampleData);

    
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties/seller');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      
      await axios.delete(`http://localhost:5000/api/properties/${id}`);
     
      setProperties(properties.filter(property => property._id !== id));
      alert('Property deleted successfully!');
    } catch (error) {
      console.error('Error deleting property', error);
      alert('Failed to delete property. Please try again.');
    }
  };

  const handleEdit = (id) => {
    
    alert(`Edit functionality for property with ID: ${id} is not implemented yet.`);
  };

  return (
    <div className="property-list">
      <h2>Your Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id} className="property-item">
            <span className="property-info">{property.name} - {property.area}</span>
            <div className="property-actions">
              <button onClick={() => handleEdit(property._id)} className="edit-button">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(property._id)} className="delete-button">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
