export default (expenses, {text, sortBy, startDate, endDate}) =>  {
    return expenses.filter((expense) => {
        const startDateMatach = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        //const textMatch = true;
        const textMatch = expense.description.includes(text);

        return startDateMatach && endDateMatch && textMatch;
    }).sort ((a,b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}