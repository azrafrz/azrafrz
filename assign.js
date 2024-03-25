const STORAGE_KEY = 'ASSIGN_APPS';

class Assign {
    static getAll() {
        const storedAssigns = localStorage.getItem(STORAGE_KEY);
        return storedAssigns ? JSON.parse(storedAssigns) : [];
    }

    static add(newAssign) {
        const storedAssigns = Assign.getAll();
        storedAssigns.push(newAssign);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedAssigns));
    }
}

export default Assign;