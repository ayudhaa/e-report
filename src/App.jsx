import { useState, useEffect, useRef } from 'react'
import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  position: 'right-top',
  distance: '20px',
  opacity: 0.9,
  borderRadius: '8px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 200,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  
  fontFamily: 'Inter',
  fontSize: '14px',
  
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'from-bottom',
  useIcon: true,
  
  success: {
    background: '#10b981',
    textColor: '#fff',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  failure: {
    background: '#ef4444',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  warning: {
    background: '#f59e0b',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
  info: {
    background: '#6E6F70',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
  },
});

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppingItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [name, setName] = useState('')
  const [qty, setQty] = useState('')
  const [price, setPrice] = useState('')
  const [names, setNames] = useState([])
  const [inputMode, setInputMode] = useState('single')
  const [tempItems, setTempItems] = useState([])
  
  const nameInputRef = useRef(null)

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('shoppingItems', JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [inputMode]);

  const styles = {
    app: {
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '1rem',
      maxWidth: '100%',
      overflowX: 'hidden'
    },
    
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      padding: '1rem 0'
    },
    
    card: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e2e8f0',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      maxWidth: '100%',
      boxSizing: 'border-box'
    },
    
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      background: 'white',
      boxSizing: 'border-box'
    },
    
    inputError: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ef4444',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      background: '#fef2f2',
      boxSizing: 'border-box'
    },
    
    inputFocus: {
      borderColor: '#6E6F70',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)',
      background: 'white'
    },
    
    btnPrimary: {
      background: '#6E6F70',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      width: '100%',
      boxSizing: 'border-box'
    },
    
    btnSecondary: {
      background: '#4b5563',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      width: '100%',
      boxSizing: 'border-box'
    },
    
    btnDanger: {
      background: '#ef4444',
      color: 'white',
      padding: '6px 12px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    
    title: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    
    subtitle: {
      fontSize: '1rem',
      color: '#6b7280',
      fontWeight: '400'
    },
    
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '1rem'
    },
    
    errorText: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '4px',
      display: 'block'
    },
    
    tag: {
      display: 'inline-block',
      background: '#e0f2fe',
      color: '#0369a1',
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '12px',
      margin: '2px',
      border: '1px solid #bae6fd'
    },
    
    modeSelector: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    
    modeButton: {
      flex: 1,
      padding: '8px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      background: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s ease'
    },
    
    modeButtonActive: {
      flex: 1,
      padding: '8px 16px',
      border: '1px solid #6E6F70',
      borderRadius: '6px',
      background: '#6E6F70',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s ease'
    },
    
    smallInput: {
      width: '80px',
      padding: '6px 8px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '12px',
      background: 'white'
    }
  }

  const validateItemName = (input) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return {
        isValid: false,
        message: 'nama barang ga boleh kosong'
      };
    }
    
    const hasValidCharacters = /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/.test(trimmedInput);
    if (!hasValidCharacters) {
      return {
        isValid: false,
        message: 'nama barang harus mengandung huruf'
      };
    }
    
    if (trimmedInput.length < 2) {
      return {
        isValid: false,
        message: 'nama barang terlalu pendek'
      };
    }
    
    return {
      isValid: true,
      message: ''
    };
  }

  const handleNumberInput = (e, setValue) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
    setValue(value);
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  }

  const handleNameKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputMode === 'multi') {
        addName();
      } else {
        addItem(e);
      }
    }
  }

  const addName = () => {
    if (!name.trim()) {
      Notify.failure('nama barang ga boleh kosong', {
        timeout: 2000,
      });
      return;
    }

    const nameValidation = validateItemName(name);
    if (!nameValidation.isValid) {
      Notify.warning(nameValidation.message, {
        timeout: 2500,
      });
      return;
    }

    const newTempItem = {
      id: Date.now() + Math.random(),
      name: name.trim(),
      qty: '',
      price: '',
      total: 0
    };

    setTempItems(prev => [...prev, newTempItem]);
    setName('');
    Notify.success(`"${name.trim()}" ditambahkan!`, {
      timeout: 1500,
    });
  }

  const removeTempItem = (id) => {
    const itemToRemove = tempItems.find(item => item.id === id);
    setTempItems(prev => prev.filter(item => item.id !== id));
    Notify.info(`"${itemToRemove.name}" dihapus dari daftar`, {
      timeout: 1500,
    });
  }

  const updateTempItem = (id, field, value) => {
    setTempItems(prev => prev.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'qty' || field === 'price') {
          const qtyValue = field === 'qty' ? parseInt(value) || 0 : parseInt(updatedItem.qty) || 0;
          const priceValue = field === 'price' ? parseInt(value) || 0 : parseInt(updatedItem.price) || 0;
          updatedItem.total = qtyValue * priceValue;
        }
        return updatedItem;
      }
      return item;
    }));
  }

  const addAllItems = () => {
    const incompleteItems = tempItems.filter(item => !item.qty || !item.price);
    if (incompleteItems.length > 0) {
      Notify.failure('semua barang harus diisi jumlah dan harganya', {
        timeout: 2000,
      });
      return;
    }

    const itemsWithValidNumbers = tempItems.filter(item => {
      const qtyNum = parseInt(item.qty);
      const priceNum = parseInt(item.price);
      return qtyNum > 0 && priceNum > 0;
    });

    if (itemsWithValidNumbers.length === 0) {
      Notify.warning('jumlah dan harga harus lebih dari 0!', {
        timeout: 2000,
      });
      return;
    }

    const formattedItems = itemsWithValidNumbers.map(item => ({
      id: item.id,
      name: item.name,
      qty: parseInt(item.qty),
      price: parseInt(item.price),
      total: parseInt(item.qty) * parseInt(item.price)
    }));

    setItems(prev => [...prev, ...formattedItems]);
    setTempItems([]);    
    Notify.success(`${formattedItems.length} barang berhasil ditambah!`, {
      timeout: 2000,
    });

    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }

  const addItem = (e) => {
    e.preventDefault();    
    if (inputMode === 'multi') {
      addAllItems();
      return;
    }

    if (!name.trim()) {
      Notify.failure('nama barang ga boleh kosong', {
        timeout: 2000,
      });
      return;
    }

    const nameValidation = validateItemName(name);
    if (!nameValidation.isValid) {
      Notify.warning(nameValidation.message, {
        timeout: 2500,
      });
      return;
    }

    if (!qty || !price) {
      Notify.failure('jumlah dan harga harus diisi', {
        timeout: 2000,
      });
      return;
    }

    if (parseInt(qty) <= 0 || parseInt(price) <= 0) {
      Notify.warning('jumlah dan harga harus lebih dari 0!', {
        timeout: 2000,
      });
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      qty: parseInt(qty),
      price: parseInt(price),
      total: parseInt(qty) * parseInt(price)
    };

    setItems(prev => [...prev, newItem]);
    setName('');
    setQty('');
    setPrice('');    
    Notify.success(`"${newItem.name}" berhasil ditambah!`, {
      timeout: 2000,
    });

    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }

  const deleteItem = (id) => {
    const itemToDelete = items.find(item => item.id === id);
    setItems(prev => prev.filter(item => item.id !== id));
    Notify.info(`"${itemToDelete.name}" dihapus dari daftar`, {
      timeout: 2000,
    });
  }

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }

  const grandTotal = items.reduce((total, item) => total + item.total, 0);
  const exportToPDF = () => {
    if (items.length === 0) {
      Notify.warning('belum ada data untuk di-export!', {
        timeout: 2000,
      });
      return;
    }

    const content = items.map((item, index) => 
      `${index + 1}. ${item.name} - ${item.qty} x ${formatRupiah(item.price)} = ${formatRupiah(item.total)}`
    ).join('\n');
    
    const report = `LAPORAN BELANJA BULANAN\n\n${content}\n\nTOTAL: ${formatRupiah(grandTotal)}`;
    Notify.success('laporan berhasil dibuat!', {
      timeout: 1500,
    });
    
    setTimeout(() => {
      alert(report);
    }, 1600);
  }

  const clearAllItems = () => {
    if (items.length === 0) {
      Notify.warning('ga ada barang atau pesanan untuk dihapus', {
        timeout: 2000,
      });
      return;
    }

    Notify.warning(`(${items.length}) dihapus..`, {
      timeout: 2500,
    });
    
    setItems([]);
    localStorage.removeItem('shoppingItems');    
    setTimeout(() => {
      Notify.info('semua barang berhasil dihapus', {
        timeout: 2000,
      });
    }, 2600);

    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }

  const nameValidation = validateItemName(name);
  const inputStyle = name && !nameValidation.isValid ? styles.inputError : styles.input;
  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <h1 style={styles.title}>e-report belanja</h1>
        <p style={styles.subtitle}>catatan belanja bulanan</p>
      </div>

      <div style={{ 
        maxWidth: '500px',
        margin: '0 auto',
        width: '100%'
      }}>
        
        <div style={styles.card}>
          <form onSubmit={addItem}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              
              <div style={styles.modeSelector}>
                <button
                  type="button"
                  onClick={() => {
                    setInputMode('single');
                    setTempItems([]);
                  }}
                  style={inputMode === 'single' ? styles.modeButtonActive : styles.modeButton}
                  onMouseOver={(e) => {
                    if (inputMode !== 'single') {
                      e.target.style.background = '#f3f4f6';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (inputMode !== 'single') {
                      e.target.style.background = 'white';
                    }
                  }}
                >
                  input satuan
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode('multi')}
                  style={inputMode === 'multi' ? styles.modeButtonActive : styles.modeButton}
                  onMouseOver={(e) => {
                    if (inputMode !== 'multi') {
                      e.target.style.background = '#f3f4f6';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (inputMode !== 'multi') {
                      e.target.style.background = 'white';
                    }
                  }}
                >
                  input multi
                </button>
              </div>
              
              <div>
                <input
                  ref={nameInputRef}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  onKeyPress={handleNameKeyPress}
                  style={inputStyle}
                  placeholder={
                    inputMode === 'single' 
                      ? "nama barang (minimal 2 huruf) yaa..." 
                      : "ketik nama barang dan tekan enter..."
                  }
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
                {name && !nameValidation.isValid && (
                  <span style={styles.errorText}>
                    {nameValidation.message}
                  </span>
                )}
              </div>

              {inputMode === 'single' && (
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  width: '100%'
                }}>
                  <div>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={qty}
                      onChange={(e) => handleNumberInput(e, setQty)}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem(e);
                        }
                      }}
                      style={styles.input}
                      placeholder="jumlah"
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                      pattern="[0-9]*"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={price}
                      onChange={(e) => handleNumberInput(e, setPrice)}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem(e);
                        }
                      }}
                      style={styles.input}
                      placeholder="harga"
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                      pattern="[0-9]*"
                    />
                  </div>
                </div>
              )}

              {inputMode === 'multi' && (
                <button
                  type="button"
                  onClick={addName}
                  style={{
                    ...styles.btnPrimary,
                    background: '#666463'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#494848'}
                  onMouseOut={(e) => e.target.style.background = '#666463'}
                >
                  tambah barang
                </button>
              )}

              {inputMode === 'multi' && tempItems.length > 0 && (
                <div style={{ 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1rem',
                  background: '#f9fafb'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {tempItems.map((item) => (
                      <div key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        background: 'white',
                        borderRadius: '6px',
                        border: '1px solid #e5e7eb'
                      }}>
                        <span style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>
                          {item.name}
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={item.qty}
                          onChange={(e) => updateTempItem(item.id, 'qty', e.target.value)}
                          placeholder="qty"
                          style={styles.smallInput}
                          pattern="[0-9]*"
                        />
                        <input
                          type="text"
                          inputMode="numeric"
                          value={item.price}
                          onChange={(e) => updateTempItem(item.id, 'price', e.target.value)}
                          placeholder="harga"
                          style={styles.smallInput}
                          pattern="[0-9]*"
                        />
                        <span style={{ fontSize: '12px', minWidth: '60px', textAlign: 'right' }}>
                          {item.total > 0 ? formatRupiah(item.total) : '-'}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeTempItem(item.id)}
                          style={{
                            ...styles.btnDanger,
                            padding: '4px 8px',
                            fontSize: '10px'
                          }}
                        >
                          hapus
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  style={styles.btnPrimary}
                  onMouseOver={(e) => e.target.style.background = '#6E6F70'}
                  onMouseOut={(e) => e.target.style.background = '#6E6F70'}
                  disabled={inputMode === 'single' ? (name && !nameValidation.isValid) : false}
                >
                  {inputMode === 'single' ? 'tambah belanjaan' : `tambah ${tempItems.length} barang`}
                </button>
              </div>
            </div>
          </form>
        </div>

        {items.length > 0 && (
          <div style={styles.card}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ 
                  background: '#6E6F70', 
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {items.length} item
                </span>
                <button
                  onClick={clearAllItems}
                  style={{
                    ...styles.btnDanger,
                    background: '#dc2624',
                    fontSize: '11px',
                    padding: '4px 8px'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#b91c1c'}
                  onMouseOut={(e) => e.target.style.background = '#dc2624'}
                >
                  hapus semua
                </button>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem'
            }}>
              {items.map((item, index) => (
                <div key={item.id} style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1rem',
                  background: '#f9fafb',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.25rem',
                        fontSize: '16px'
                      }}>
                        {item.name}
                      </h3>
                      <div style={{ 
                        display: 'flex', 
                        gap: '1rem', 
                        fontSize: '14px', 
                        color: '#6b7280'
                      }}>
                        <span>qty: {item.qty}</span>
                        <span>harga: {formatRupiah(item.price)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      style={styles.btnDanger}
                      onMouseOver={(e) => e.target.style.background = '#dc2624'}
                      onMouseOut={(e) => e.target.style.background = '#ef4444'}
                    >
                      hapus
                    </button>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>No. {index + 1}</span>
                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                      {formatRupiah(item.total)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div style={styles.card}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280', 
                  marginBottom: '0.5rem' 
                }}>
                </p>
                <p style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#1f2937'
                }}>
                  {formatRupiah(grandTotal)}
                </p>
              </div>
              <button
                onClick={exportToPDF}
                style={styles.btnSecondary}
                onMouseOver={(e) => e.target.style.background = '#374151'}
                onMouseOut={(e) => e.target.style.background = '#4b5563'}
              >
                export laporan
              </button>
            </div>
          </div>
        )}

        {items.length === 0 && (
          <div style={{...styles.card, textAlign: 'center', padding: '3rem 1rem'}}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>🛒</div>
            <h3 style={{...styles.sectionTitle, marginBottom: '0.5rem', color: '#6b7280'}}>belum ada belanjaan</h3>
          </div>
        )}
        <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>
            made with❤️
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App