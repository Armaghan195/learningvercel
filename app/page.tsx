export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Lab8_App";
  const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME || "Muhammad Armaghan";

  return (
    <main style={{ textAlign: "center", marginTop: "10%", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Lab 8 — Vercel Deployment
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        <strong>Name:</strong> {studentName}
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        <strong>Roll:</strong> 01-131232-050
      </p>
      <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#555" }}>
        <strong>App:</strong> {appName}
      </p>
      <hr style={{ margin: "2rem auto", width: "50%" }} />
      <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Labs Completed</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
        <li>Lab 1 — Docker</li>
        <li>Lab 2 — LocalStack</li>
        <li>Lab 7 — Terraform</li>
        <li>Lab 8 — Vercel (this lab)</li>
      </ul>
      <hr style={{ margin: "2rem auto", width: "50%" }} />
      <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Course Info</h2>
      <p style={{ fontSize: "1rem", color: "#444" }}>Course: Cloud Computing | Bahria University</p>
      <p style={{ fontSize: "1rem", color: "#444" }}>Instructor: Engr. Salman Zafar</p>
      <p style={{ fontSize: "1rem", color: "#444" }}>Department: Software Engineering</p>
      <hr style={{ margin: "2rem auto", width: "50%" }} />
      <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>API Endpoints</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="/api/hello">/api/hello</a> — Basic GET</li>
        <li><a href="/api/student/001">/api/student/001</a> — Dynamic Route</li>
        <li><a href="/api/geo">/api/geo</a> — Edge Geolocation</li>
      </ul>
    </main>
  );
}
