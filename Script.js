function generatePortfolio() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const bio = document.getElementById('bio').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${name}'s Portfolio</title>
      <style>
        body { font-family: Arial; padding: 20px; background: #f0f0f0; }
        .card { background: white; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1);}
        h1 { margin: 0; }
        a { color: #007bff; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>${name}</h1>
        <h3>${title}</h3>
        <p>${bio}</p>
        <p>
          <a href="${linkedin}" target="_blank">LinkedIn</a> | 
          <a href="${github}" target="_blank">GitHub</a>
        </p>
      </div>
    </body>
    </html>
  `;

  const iframe = document.getElementById('preview');
  iframe.srcdoc = htmlContent;
  window.generatedHTML = htmlContent;
}

function downloadHTML() {
  const blob = new Blob([window.generatedHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my-portfolio.html";
  link.click();
}
