describe('🌐 ทดสอบ API - GET Users', () => {
  it('เช็คสถานะ 200 และข้อมูลไม่ว่าง', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1',
      failOnStatusCode: false,
      headers: {
        // ✅ ปกติ reqres.in ยังไม่ต้องใช้ API key จริง ๆ
        // ✅ แต่ถ้าเค้าประกาศให้ใช้ API Key ในอนาคต ค่อยเพิ่มตามจริง
        // ตัวอย่าง header placeholder เท่านั้น
        'x-api-key': 'reqres-free-v1' 
      }
    }).then((response) => {
      // 🔐 กรองเฉพาะ status 200 เพราะคุณใช้ failOnStatusCode: false
      if (response.status !== 200) {
        throw new Error(`Status code is not 200: ${response.status}`)
      }

      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.length.greaterThan(0)
    })
  })
})
