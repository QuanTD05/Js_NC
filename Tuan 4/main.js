import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductById
} from "./services.js";

const btnAdd = document.querySelector('#btnAdd');
const body   = document.querySelector('body');
const tbody  = document.querySelector('tbody');

const app = {
  // 1. Check login
  checkLogin() {
    const username = localStorage.getItem('username');
    if (username) {
      const helloHeading = document.getElementById('helloHeading');
      helloHeading.innerHTML = `<h1>Xin chào ${username}</h1>`;
    }
  },

  // 2. Render danh sách
  async renderList() {
    const data = await getProducts();
    tbody.innerHTML = data.map((item, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>
          <img src="${item.image || 'https://via.placeholder.com/60'}"
               width="60"
               alt="${item.name}">
        </td>
        <td>${item.name}</td>
        <td>${item.Describe}</td>
        <td>${item.quantity}</td>
        <td>
          <button class="btnDelete btn btn-danger btn-sm me-1" data-id="${item.id}">
            Xóa
          </button>
          <button class="btnEdit   btn btn-warning btn-sm" data-id="${item.id}">
            Cập nhật
          </button>
        </td>
      </tr>
    `).join('');
    this.handleDelete();
    this.renderUpdate();
  },

  // 3. Render nút Add
  renderAdd() {
    btnAdd.addEventListener('click', () => {
      body.innerHTML = this._formTemplate();
      this.handleAdd();
    });
  },

  // 4. Xử lý Add
  handleAdd() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name     = form.name.value.trim();
      const desc     = form.Describe.value.trim();
      const qty      = form.quantity.value.trim();
      const imageURL = form.image.value.trim();

      if (!name || !desc || !qty || !imageURL) {
        return alert('Không được để trống bất cứ trường nào');
      }

      await addProduct({ name, Describe: desc, quantity: qty, image: imageURL });
      alert('Thêm thành công');
      this._goBackToList();
    });
  },

  // 5. Xử lý Delete
  handleDelete() {
    document.querySelectorAll('.btnDelete').forEach(btn =>
      btn.addEventListener('click', async () => {
        if (!confirm('Bạn có chắc chắn muốn xóa không?')) return;
        await deleteProduct(btn.dataset.id);
        this.renderList();
      })
    );
  },

  // 6. Render nút Edit
  renderUpdate() {
    document.querySelectorAll('.btnEdit').forEach(btn =>
      btn.addEventListener('click', async () => {
        const id   = btn.dataset.id;
        const item = await getProductById(id);
        body.innerHTML = this._formTemplate(item);
        this.handleUpdate(id);
      })
    );
  },

  // 7. Xử lý Update
  handleUpdate(id) {
    const form = document.querySelector('#form');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name     = form.name.value.trim();
      const desc     = form.Describe.value.trim();
      const qty      = form.quantity.value.trim();
      const imageURL = form.image.value.trim();

      if (!name || !desc || !qty || !imageURL) {
        return alert('Không được để trống bất cứ trường nào');
      }

      await updateProduct(id, { name, Describe: desc, quantity: qty, image: imageURL });
      alert('Cập nhật thành công');
      this._goBackToList();
    });
  },

  // 8. Template form Add / Edit (đã thêm input image)
  _formTemplate(item = {}) {
    return `
      <div class="container py-4">
        <h2>${item.id ? 'Cập nhật' : 'Thêm mới'} sản phẩm</h2>
        <form id="form" class="mt-3">
          <div class="mb-3">
            <label class="form-label">Tên sản phẩm</label>
            <input name="name" class="form-control" value="${item.name || ''}" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Mô tả</label>
            <input name="Describe" class="form-control" value="${item.Describe || ''}" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Số lượng</label>
            <input name="quantity" type="number" class="form-control" value="${item.quantity || ''}" required>
          </div>
          <div class="mb-3">
            <label class="form-label">URL hình ảnh</label>
            <input name="image" type="url" class="form-control" value="${item.image || ''}" required>
          </div>
          <button type="submit" class="btn btn-primary">
            ${item.id ? 'Cập nhật' : 'Thêm'}
          </button>
          <button type="button" class="btn btn-secondary ms-2" id="btnCancel">
            Hủy
          </button>
        </form>
      </div>
    `;
  },

  // 9. Quay về list-view
  _goBackToList() {
    // reload list-view layout
    body.innerHTML = `
      <div class="container py-4">
        <h1 class="text-center mb-4">Product List</h1>
        <button id="btnAdd" class="btn btn-primary mb-3">Add</button>
        <table class="table table-striped align-middle">
          <thead>
            <tr>
              <th>#</th><th>Ảnh</th><th>Tên</th><th>Mô tả</th><th>Số lượng</th><th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    `;
    // bind lại và chạy tiếp
    this.start();
  },

  start() {
    this.renderList();
    this.renderAdd();
    this.checkLogin();
  }
};

app.start();
