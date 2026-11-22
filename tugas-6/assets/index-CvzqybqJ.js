(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){localStorage.setItem(e,JSON.stringify(t))}function t(e,t){let n=localStorage.getItem(e);return n?JSON.parse(n):t}function n(e,t){return e.filter(t)}var r=`Manajer Tugas Kuliah`,i=`1.0.0`,a=`Afdhal Jihadi`,o=`daftar_tugas_kuliah_v1`,s=t(o,[{id:1,judul:`Implementasi TypeScript & Vite`,mataKuliah:`Pengembangan Aplikasi Web`,deadline:`2026-11-30`,status:`Belum Selesai`,prioritasTinggi:!0}]),c=null,l=`Semua`,u=document.querySelector(`#app`);function d(){document.title=r;let e=l===`Semua`?s:n(s,e=>e.status===l);u.innerHTML=`
    <div class="container">
      <header>
        <div>
          <h1>${r}</h1>
          <small style="color: var(--muted)">Oleh: ${a}</small>
        </div>
        <span class="badge-env">v${i} • Vite + TypeScript</span>
      </header>

      <section class="card">
        <h2 style="font-size: 1.05rem; margin-bottom: 1rem;">
          ${c===null?`Tambah Tugas Baru`:`Edit Tugas Kuliah`}
        </h2>
        <form id="form-tugas">
          <div class="form-grid">
            <div class="form-group">
              <label for="judul">Judul Tugas</label>
              <input type="text" id="judul" placeholder="Contoh: Laporan Praktikum" required />
            </div>
            <div class="form-group">
              <label for="matkul">Mata Kuliah</label>
              <input type="text" id="matkul" placeholder="Contoh: Pengembangan Web" required />
            </div>
            <div class="form-group">
              <label for="deadline">Tenggat Waktu (Deadline)</label>
              <input type="date" id="deadline" required />
            </div>
            <div class="form-group" style="justify-content: center;">
              <label style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1.2rem; cursor: pointer;">
                <input type="checkbox" id="prioritas" />
                Tandai Prioritas Tinggi
              </label>
            </div>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn-primary">
              ${c===null?`Tambah Tugas`:`Simpan Perubahan`}
            </button>
            ${c===null?``:`<button type="button" id="btn-batal" class="btn-secondary">Batal</button>`}
          </div>
        </form>
      </section>

      <section class="card">
        <div class="toolbar">
          <strong>Daftar Tugas (${e.length})</strong>
          <select id="filter-status">
            <option value="Semua" ${l===`Semua`?`selected`:``}>Semua Status</option>
            <option value="Belum Selesai" ${l===`Belum Selesai`?`selected`:``}>Belum Selesai</option>
            <option value="Selesai" ${l===`Selesai`?`selected`:``}>Selesai</option>
          </select>
        </div>

        <div class="task-list">
          ${e.length===0?`<p style="color: var(--muted); text-align: center; padding: 1rem;">Belum ada tugas pada kategori ini.</p>`:e.map(e=>`
                <div class="task-item ${e.status===`Selesai`?`done`:``}">
                  <div>
                    <h3>
                      ${e.prioritasTinggi?`🔥 `:``}${e.judul}
                      <span class="status-pill ${e.status===`Selesai`?`status-done`:`status-pending`}">${e.status}</span>
                    </h3>
                    <div class="task-meta">
                      📚 ${e.mataKuliah} &nbsp;|&nbsp; 📅 Deadline: ${e.deadline}
                    </div>
                  </div>
                  <div class="task-actions">
                    <button class="btn-success" data-toggle="${e.id}">
                      ${e.status===`Selesai`?`Batal Selesai`:`Selesai`}
                    </button>
                    <button class="btn-warning" data-edit="${e.id}">Edit</button>
                    <button class="btn-danger" data-hapus="${e.id}">Hapus</button>
                  </div>
                </div>
              `).join(``)}
        </div>
      </section>

      <section class="card info-section">
        <h2>Penjelasan Teknologi Proyek</h2>
        <ul>
          <li><strong>Git:</strong> Sistem kontrol versi terdistribusi untuk mencatat riwayat perubahan kode, mengelola cabang (<em>branching</em>), dan menggabungkan pekerjaan (<em>merging</em>).</li>
          <li><strong>npm (Node Package Manager):</strong> Manajer paket JavaScript untuk menginstal dependensi proyek serta menjalankan skrip pengembangan dan build.</li>
          <li><strong>TypeScript:</strong> Superset dari JavaScript yang menambahkan pengetikan statis (<em>static typing</em>) guna mencegah bug sebelum kode dijalankan.</li>
          <li><strong>Vite:</strong> Build tool modern yang menyediakan server pengembangan super cepat menggunakan ES Modules serta membundel aset produksi.</li>
          <li><strong>Environment Variables (.env):</strong> Berkas konfigurasi untuk menyimpan variabel lingkungan aplikasi secara terpisah dari kode sumber utama.</li>
          <li><strong>Peran Compiler, Transpiler, dan Bundler:</strong> <em>Compiler/Transpiler</em> (seperti <code>tsc</code> dan esbuild) mengubah kode TypeScript modern menjadi JavaScript standar yang dipahami browser, sedangkan <em>Bundler</em> (Rollup pada Vite) menggabungkan dan mengoptimalkan seluruh modul JS, CSS, dan aset menjadi paket siap produksi.</li>
        </ul>
      </section>

      <footer style="text-align:center; margin-top:1.5rem; color:var(--primary); font-size:0.85rem;">© 2026 Afdhal Jihadi - Praktikum PAW</footer>
      <footer style="text-align:center; margin-top:0.35rem; color:var(--muted); font-size:0.85rem;">Dibuat untuk Tugas Pertemuan 6 - Pengembangan Aplikasi Web</footer>
    </div>
  `,f()}function f(){let t=document.querySelector(`#form-tugas`),n=document.querySelector(`#judul`),r=document.querySelector(`#matkul`),i=document.querySelector(`#deadline`),a=document.querySelector(`#prioritas`);if(c!==null){let e=s.find(e=>e.id===c);e&&(n.value=e.judul,r.value=e.mataKuliah,i.value=e.deadline,a.checked=e.prioritasTinggi)}t.addEventListener(`submit`,t=>{t.preventDefault();let l=n.value.trim(),u=r.value.trim(),f=i.value,p=a.checked;if(l&&u&&f){if(c!==null)s=s.map(e=>e.id===c?{...e,judul:l,mataKuliah:u,deadline:f,prioritasTinggi:p}:e),c=null;else{let e={id:Date.now(),judul:l,mataKuliah:u,deadline:f,status:`Belum Selesai`,prioritasTinggi:p};s.push(e)}e(o,s),d()}}),document.querySelector(`#btn-batal`)?.addEventListener(`click`,()=>{c=null,d()}),document.querySelector(`#filter-status`)?.addEventListener(`change`,e=>{l=e.target.value,d()}),document.querySelectorAll(`[data-toggle]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.toggle);s=s.map(e=>e.id===n?{...e,status:e.status===`Selesai`?`Belum Selesai`:`Selesai`}:e),e(o,s),d()})}),document.querySelectorAll(`[data-edit]`).forEach(e=>{e.addEventListener(`click`,()=>{c=Number(e.dataset.edit),d()})}),document.querySelectorAll(`[data-hapus]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.hapus);s=s.filter(e=>e.id!==n),c===n&&(c=null),e(o,s),d()})})}d();