// Vercel Serverless Function - Employee Salary & Payslip API
// Provides full backend API compatibility for Vercel deployment

const initialEmployees = [
    { employeeId: 'EMP001', firstName: 'Rahul', lastName: 'Sharma', gender: 'Male', dob: '1992-05-14', email: 'rahul.sharma@example.com', phone: '9876543210', department: 'IT', designation: 'Senior Software Developer', joiningDate: '2021-06-15', basicSalary: 75000, bankAccount: 'HDFC000123456789', panNumber: 'ABCPS1234F', status: 'Active' },
    { employeeId: 'EMP002', firstName: 'Priya', lastName: 'Patel', gender: 'Female', dob: '1995-08-22', email: 'priya.patel@example.com', phone: '9876543211', department: 'HR', designation: 'HR Manager', joiningDate: '2022-01-10', basicSalary: 62000, bankAccount: 'SBIN000987654321', panNumber: 'BPYPP5678G', status: 'Active' },
    { employeeId: 'EMP003', firstName: 'Amit', lastName: 'Verma', gender: 'Male', dob: '1990-11-03', email: 'amit.verma@example.com', phone: '9876543212', department: 'Finance', designation: 'Senior Financial Analyst', joiningDate: '2020-09-01', basicSalary: 68000, bankAccount: 'ICIC000456789123', panNumber: 'CAAVV9012K', status: 'Active' },
    { employeeId: 'EMP004', firstName: 'Sneha', lastName: 'Kulkarni', gender: 'Female', dob: '1994-03-18', email: 'sneha.k@example.com', phone: '9876543213', department: 'Marketing', designation: 'Digital Marketing Lead', joiningDate: '2022-04-12', basicSalary: 55000, bankAccount: 'AXIS000789123456', panNumber: 'DESPK3456M', status: 'Active' },
    { employeeId: 'EMP005', firstName: 'Vikram', lastName: 'Singh', gender: 'Male', dob: '1989-12-25', email: 'vikram.singh@example.com', phone: '9876543214', department: 'Operations', designation: 'Operations Manager', joiningDate: '2019-11-20', basicSalary: 58000, bankAccount: 'KKBK000321654987', panNumber: 'EFGVS7890N', status: 'Active' },
    { employeeId: 'EMP006', firstName: 'Ananya', lastName: 'Roy', gender: 'Female', dob: '1997-07-09', email: 'ananya.roy@example.com', phone: '9876543215', department: 'IT', designation: 'Frontend Engineer', joiningDate: '2023-02-15', basicSalary: 48000, bankAccount: 'HDFC000654987321', panNumber: 'FGHAR2345P', status: 'Active' },
    { employeeId: 'EMP007', firstName: 'Rajesh', lastName: 'Gupta', gender: 'Male', dob: '1991-04-30', email: 'rajesh.gupta@example.com', phone: '9876543216', department: 'Finance', designation: 'Accounts Executive', joiningDate: '2021-08-05', basicSalary: 42000, bankAccount: 'PNBB000147258369', panNumber: 'GHIRE6789Q', status: 'Active' },
    { employeeId: 'EMP008', firstName: 'Pooja', lastName: 'Nair', gender: 'Female', dob: '1996-09-14', email: 'pooja.nair@example.com', phone: '9876543217', department: 'HR', designation: 'Talent Acquisition Specialist', joiningDate: '2023-05-01', basicSalary: 40000, bankAccount: 'SBIN000369258147', panNumber: 'HIJPN0123R', status: 'Active' },
    { employeeId: 'EMP009', firstName: 'Karthik', lastName: 'Iyer', gender: 'Male', dob: '1993-01-19', email: 'karthik.iyer@example.com', phone: '9876543218', department: 'IT', designation: 'DevOps Engineer', joiningDate: '2022-07-18', basicSalary: 70000, bankAccount: 'ICIC000852963741', panNumber: 'IJKKI4567S', status: 'Active' },
    { employeeId: 'EMP010', firstName: 'Divya', lastName: 'Joshi', gender: 'Female', dob: '1998-10-05', email: 'divya.joshi@example.com', phone: '9876543219', department: 'Marketing', designation: 'Content Strategist', joiningDate: '2023-10-10', basicSalary: 38000, bankAccount: 'BARB000963852741', panNumber: 'JKLDJ8901T', status: 'Inactive' }
];

const initialSalaries = [
    { salaryId: 1, employeeId: 'EMP001', salaryMonth: 'September', salaryYear: 2026, basicSalary: 75000, hra: 30000, da: 7500, allowances: 5000, bonus: 5000, pf: 9000, professionalTax: 200, otherDeductions: 1000, grossSalary: 122500, totalDeductions: 10200, netSalary: 112300, processedDate: '2026-09-20' },
    { salaryId: 2, employeeId: 'EMP002', salaryMonth: 'September', salaryYear: 2026, basicSalary: 62000, hra: 24800, da: 6200, allowances: 4000, bonus: 3000, pf: 7440, professionalTax: 200, otherDeductions: 500, grossSalary: 100000, totalDeductions: 8140, netSalary: 91860, processedDate: '2026-09-20' },
    { salaryId: 3, employeeId: 'EMP003', salaryMonth: 'September', salaryYear: 2026, basicSalary: 68000, hra: 27200, da: 6800, allowances: 4500, bonus: 4000, pf: 8160, professionalTax: 200, otherDeductions: 800, grossSalary: 110500, totalDeductions: 9160, netSalary: 101340, processedDate: '2026-09-20' },
    { salaryId: 4, employeeId: 'EMP004', salaryMonth: 'September', salaryYear: 2026, basicSalary: 55000, hra: 22000, da: 5500, allowances: 3500, bonus: 2000, pf: 6600, professionalTax: 200, otherDeductions: 500, grossSalary: 88000, totalDeductions: 7300, netSalary: 80700, processedDate: '2026-09-20' },
    { salaryId: 5, employeeId: 'EMP005', salaryMonth: 'September', salaryYear: 2026, basicSalary: 58000, hra: 23200, da: 5800, allowances: 3800, bonus: 2500, pf: 6960, professionalTax: 200, otherDeductions: 600, grossSalary: 93300, totalDeductions: 7760, netSalary: 85540, processedDate: '2026-09-20' },
    { salaryId: 6, employeeId: 'EMP006', salaryMonth: 'September', salaryYear: 2026, basicSalary: 48000, hra: 19200, da: 4800, allowances: 3000, bonus: 2000, pf: 5760, professionalTax: 200, otherDeductions: 400, grossSalary: 77000, totalDeductions: 6360, netSalary: 70640, processedDate: '2026-09-20' },
    { salaryId: 7, employeeId: 'EMP007', salaryMonth: 'September', salaryYear: 2026, basicSalary: 42000, hra: 16800, da: 4200, allowances: 2800, bonus: 1500, pf: 5040, professionalTax: 200, otherDeductions: 300, grossSalary: 67300, totalDeductions: 5540, netSalary: 61760, processedDate: '2026-09-20' },
    { salaryId: 8, employeeId: 'EMP008', salaryMonth: 'September', salaryYear: 2026, basicSalary: 40000, hra: 16000, da: 4000, allowances: 2500, bonus: 1500, pf: 4800, professionalTax: 200, otherDeductions: 300, grossSalary: 64000, totalDeductions: 5300, netSalary: 58700, processedDate: '2026-09-20' },
    { salaryId: 9, employeeId: 'EMP009', salaryMonth: 'September', salaryYear: 2026, basicSalary: 70000, hra: 28000, da: 7000, allowances: 4800, bonus: 4500, pf: 8400, professionalTax: 200, otherDeductions: 900, grossSalary: 114300, totalDeductions: 9500, netSalary: 104800, processedDate: '2026-09-20' }
];

const initialPayslips = [
    { payslipId: 1, employeeId: 'EMP001', salaryId: 1, generatedDate: '2026-09-21 10:30:00', status: 'Generated' },
    { payslipId: 2, employeeId: 'EMP002', salaryId: 2, generatedDate: '2026-09-21 10:35:00', status: 'Generated' },
    { payslipId: 3, employeeId: 'EMP003', salaryId: 3, generatedDate: '2026-09-21 10:40:00', status: 'Generated' },
    { payslipId: 4, employeeId: 'EMP004', salaryId: 4, generatedDate: '2026-09-21 10:45:00', status: 'Generated' },
    { payslipId: 5, employeeId: 'EMP005', salaryId: 5, generatedDate: '2026-09-21 10:50:00', status: 'Generated' },
    { payslipId: 6, employeeId: 'EMP006', salaryId: 6, generatedDate: '2026-09-21 10:55:00', status: 'Generated' },
    { payslipId: 7, employeeId: 'EMP007', salaryId: 7, generatedDate: '2026-09-21 11:00:00', status: 'Generated' },
    { payslipId: 8, employeeId: 'EMP008', salaryId: 8, generatedDate: '2026-09-21 11:05:00', status: 'Generated' },
    { payslipId: 9, employeeId: 'EMP009', salaryId: 9, generatedDate: '2026-09-21 11:10:00', status: 'Generated' }
];

// Persistent state in memory across serverless lambda invocations
global._ems_db = global._ems_db || {
    employees: [...initialEmployees],
    salaries: [...initialSalaries],
    payslips: [...initialPayslips]
};

function parseBody(req) {
    return new Promise((resolve) => {
        if (req.body && typeof req.body === 'object') return resolve(req.body);
        let data = '';
        req.on('data', chunk => data += chunk);
        req.on('end', () => {
            try {
                resolve(data ? JSON.parse(data) : {});
            } catch (e) {
                resolve({});
            }
        });
    });
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
    }

    const parsedUrl = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
    let pathname = parsedUrl.pathname.replace(/^\/api/, '');
    if (!pathname.startsWith('/')) pathname = '/' + pathname;

    const db = global._ems_db;

    // Helper to send JSON
    const sendJson = (status, obj) => {
        res.statusCode = status;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(obj));
    };

    try {
        // 1. Auth: POST /api/auth/login
        if (pathname === '/auth/login' && req.method === 'POST') {
            const body = await parseBody(req);
            if (body.username === 'admin' && body.password === 'admin123') {
                return sendJson(200, { success: true, username: 'admin', fullName: 'System Administrator' });
            } else {
                return sendJson(401, { success: false, message: 'Invalid Username or Password.' });
            }
        }

        // 2. Metrics: GET /api/dashboard/metrics
        if (pathname === '/dashboard/metrics' && req.method === 'GET') {
            const totalEmployees = db.employees.length;
            const activeEmployees = db.employees.filter(e => (e.status || '').toLowerCase() === 'active').length;
            const totalSalaryProcessed = db.salaries.reduce((sum, s) => sum + (Number(s.netSalary) || 0), 0);
            const payslipsGenerated = db.payslips.length;
            return sendJson(200, {
                totalEmployees,
                activeEmployees,
                totalSalaryProcessed,
                payslipsGenerated
            });
        }

        // 3. Employees: /api/employees[/:id]
        if (pathname.startsWith('/employees')) {
            const parts = pathname.split('/').filter(Boolean);
            const empId = parts[1] ? decodeURIComponent(parts[1]) : null;

            if (req.method === 'GET') {
                if (empId) {
                    const emp = db.employees.find(e => e.employeeId === empId);
                    if (emp) return sendJson(200, emp);
                    return sendJson(404, { error: 'Employee not found' });
                }
                return sendJson(200, db.employees);
            }

            if (req.method === 'POST') {
                const body = await parseBody(req);
                if (!body.employeeId) {
                    const maxId = db.employees.reduce((max, e) => {
                        const num = parseInt(e.employeeId.replace('EMP', '')) || 0;
                        return num > max ? num : max;
                    }, 0);
                    body.employeeId = 'EMP' + String(maxId + 1).padStart(3, '0');
                }
                db.employees.push(body);
                return sendJson(201, body);
            }

            if (req.method === 'PUT') {
                const body = await parseBody(req);
                const targetId = empId || body.employeeId;
                const idx = db.employees.findIndex(e => e.employeeId === targetId);
                if (idx !== -1) {
                    db.employees[idx] = { ...db.employees[idx], ...body, employeeId: targetId };
                    return sendJson(200, db.employees[idx]);
                }
                return sendJson(404, { error: 'Employee not found' });
            }

            if (req.method === 'DELETE') {
                if (!empId) return sendJson(400, { error: 'Missing employeeId' });
                const idx = db.employees.findIndex(e => e.employeeId === empId);
                if (idx !== -1) {
                    db.employees.splice(idx, 1);
                    return sendJson(200, { success: true, message: 'Employee deleted' });
                }
                return sendJson(404, { error: 'Employee not found' });
            }
        }

        // 4. Salaries: /api/salaries[/:id]
        if (pathname.startsWith('/salaries')) {
            const parts = pathname.split('/').filter(Boolean);
            const salId = parts[1] ? parseInt(parts[1]) : null;

            if (req.method === 'GET') {
                if (salId) {
                    const s = db.salaries.find(x => x.salaryId === salId);
                    if (s) return sendJson(200, s);
                    return sendJson(404, { error: 'Salary record not found' });
                }
                return sendJson(200, db.salaries);
            }

            if (req.method === 'POST') {
                const body = await parseBody(req);
                const basic = Number(body.basicSalary) || 0;
                const hra = Number(body.hra) || basic * 0.4;
                const da = Number(body.da) || basic * 0.1;
                const allowances = Number(body.allowances) || 0;
                const bonus = Number(body.bonus) || 0;
                const pf = Number(body.pf) || basic * 0.12;
                const pt = Number(body.professionalTax) || 200;
                const other = Number(body.otherDeductions) || 0;

                const gross = basic + hra + da + allowances + bonus;
                const ded = pf + pt + other;
                const net = gross - ded;

                const existingIndex = db.salaries.findIndex(s =>
                    s.employeeId === body.employeeId &&
                    String(s.salaryMonth).toLowerCase() === String(body.salaryMonth).toLowerCase() &&
                    Number(s.salaryYear) === Number(body.salaryYear)
                );

                const record = {
                    ...body,
                    basicSalary: basic,
                    hra, da, allowances, bonus, pf,
                    professionalTax: pt,
                    otherDeductions: other,
                    grossSalary: gross,
                    totalDeductions: ded,
                    netSalary: net,
                    processedDate: body.processedDate || new Date().toISOString().split('T')[0]
                };

                if (existingIndex !== -1) {
                    record.salaryId = db.salaries[existingIndex].salaryId;
                    db.salaries[existingIndex] = record;
                } else {
                    const maxId = db.salaries.reduce((max, s) => s.salaryId > max ? s.salaryId : max, 0);
                    record.salaryId = maxId + 1;
                    db.salaries.unshift(record);
                }
                return sendJson(200, record);
            }

            if (req.method === 'DELETE') {
                if (!salId) return sendJson(400, { error: 'Missing salaryId' });
                const idx = db.salaries.findIndex(s => s.salaryId === salId);
                if (idx !== -1) {
                    db.salaries.splice(idx, 1);
                    return sendJson(200, { success: true, message: 'Salary deleted' });
                }
                return sendJson(404, { error: 'Salary record not found' });
            }
        }

        // 5. Payslips: /api/payslips[/generate]
        if (pathname.startsWith('/payslips')) {
            if (pathname.includes('/generate') && req.method === 'POST') {
                const body = await parseBody(req);
                const { employeeId, month, year } = body;

                let sal = db.salaries.find(s =>
                    s.employeeId === employeeId &&
                    String(s.salaryMonth).toLowerCase() === String(month).toLowerCase() &&
                    Number(s.salaryYear) === Number(year)
                );

                if (!sal) {
                    const emp = db.employees.find(e => e.employeeId === employeeId);
                    if (!emp) return sendJson(404, { error: 'Employee not found' });

                    const basic = Number(emp.basicSalary) || 0;
                    const hra = basic * 0.4;
                    const da = basic * 0.1;
                    const allowances = 4000;
                    const pf = basic * 0.12;
                    const pt = 200;
                    const gross = basic + hra + da + allowances;
                    const ded = pf + pt;
                    const net = gross - ded;

                    const maxSalId = db.salaries.reduce((max, s) => s.salaryId > max ? s.salaryId : max, 0);
                    sal = {
                        salaryId: maxSalId + 1,
                        employeeId,
                        salaryMonth: month,
                        salaryYear: Number(year),
                        basicSalary: basic,
                        hra, da, allowances, bonus: 0,
                        pf, professionalTax: pt, otherDeductions: 0,
                        grossSalary: gross, totalDeductions: ded, netSalary: net,
                        processedDate: new Date().toISOString().split('T')[0]
                    };
                    db.salaries.unshift(sal);
                }

                let slip = db.payslips.find(p => p.employeeId === employeeId && p.salaryId === sal.salaryId);
                if (!slip) {
                    const maxSlipId = db.payslips.reduce((max, p) => p.payslipId > max ? p.payslipId : max, 0);
                    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
                    slip = {
                        payslipId: maxSlipId + 1,
                        employeeId,
                        salaryId: sal.salaryId,
                        generatedDate: now,
                        status: 'Generated'
                    };
                    db.payslips.unshift(slip);
                }
                return sendJson(200, slip);
            }

            if (req.method === 'GET') {
                return sendJson(200, db.payslips);
            }
        }

        // Route not found
        return sendJson(404, { error: 'Endpoint not found: ' + pathname });
    } catch (err) {
        console.error('API Error:', err);
        return sendJson(500, { error: err.message });
    }
};
