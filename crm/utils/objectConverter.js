/**
 * I will have the logic to transform the object
 */

exports.userResponse = (users) => {
    usersResponse = [];

    users.forEach(user => {
        usersResponse.push({
            name: user.name,
            userId: user.userId,
            email: user.email,
            userType: user.userType,
            userStatus: user.userStatus
        });
    })

    return usersResponse
}

exports.ticketResponse = (ticket) => {
    return {
        title: ticket.title,
        description: ticket.description,
        ticketPriority: ticket.ticketPriority,
        status: ticket.status,
        reporter: ticket.reporter,
        assignee: ticket.assignee,
        id: ticket._id,
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt
    }
}

exports.ticketListResponse = (tickets) => {
    ticketResult = [];
    tickets.forEach(ticket => {
        ticketResult.push({
            title: ticket.title,
            description: ticket.description,
            ticketPriority: ticket.ticketPriority,
            status: ticket.status,
            reporter: ticket.reporter,
            assignee: ticket.assignee,
            id: ticket._id,
            createdAt: ticket.createdAt,
            updatedAt: ticket.updatedAt
        })
    })
    return ticketResult;
}