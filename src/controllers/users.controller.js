const usersData = [
    {
        id: 1,
        name: "sajib",
        contact: "01254875455",
        address: "Tejgaon",
        photoUrl: "sajib/shd/fadh/afd"
    },
    {
        id: 2,
        name: "omor",
        contact: "01254876548",
        address: "Tejgaon kunipara",
        photoUrl: "omor/shd/fadh/afd"
    },
    {
        id: 3,
        name: "kanchon",
        contact: "01254875450",
        address: "mohakhali",
        photoUrl: "kanchon/shd/fadh/afd"
    },
    {
        id: 4,
        name: "walid",
        contact: "01254875459",
        address: "badda",
        photoUrl: "walid/shd/fadh/afd"
    },
]


module.exports.getAllUser = (req, res, next) => {
    try {
        // console.log();
        const { limit } = req.query
        const findData = usersData.slice(0, limit);
        res.status(200).json({
            status: true,
            message: "Succesfully found Data",
            data: findData,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
    }
};
module.exports.saveAUser = (req, res, next) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({
                status: false,
                message: "ID Missing which was required properties",
            });
        } else if (!req.body.name) {
            return res.status(400).json({
                status: false,
                message: "Name Missing which was required properties",
            });
        } else if (!req.body.contact) {
            return res.status(400).json({
                status: false,
                message: "Contact Missing which was required properties",
            });
        } else if (!req.body.address) {
            return res.status(400).json({
                status: false,
                message: "Address Missing which was required properties",
            });
        } else if (!req.body.photoUrl) {
            return res.status(400).json({
                status: false,
                message: "PhotoUrl Missing which was required properties",
            });
        } else {
            usersData.push(req.body),
                res.status(200).json({
                    status: true,
                    message: "Succesfully Save User",
                    data: usersData,
                })
        }

        next();
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
    }
}
module.exports.getAUser = (req, res, next) => {
    try {
        const { id } = req.params
        const findUser = usersData.find(user => user.id === Number(id));
        res.status(200).json({
            status: true,
            message: "Succesfully Save User",
            data: findUser,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
    }
}

module.exports.updateAUser = (req, res, next) => {
    try {
        const { id } = req.params
        const findUser = usersData.find(user => user.id === Number(id));
        findUser.id = id,
            findUser.name = req.body.name,
            findUser.contact = req.body.contact || findUser.contact,
            findUser.address = req.body.address || findUser.address,
            findUser.photoUrl = req.body.photoUrl || findUser.photoUrl,
            res.status(200).json({
                status: true,
                message: "Succesfully Save User",
                data: req.body,
            })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
    }
}

module.exports.bulkUpdate = (req, res, next) => {
    try {
        // console.log("bulkUpdate");
        const { ids } = req.body;
        const updatedUserIndices = [];
        console.log(ids);
        ids.forEach(data => {
            const userIndex = usersData.find(user => user.id === data);
            userIndex.id = data,
                userIndex.name = "kamal"
            updatedUserIndices.push(userIndex)
        })
        res.status(200).json({
            status: true,
            message: "Succesfully Save User",
            data: updatedUserIndices,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "bulkUpdate Internal Server Error",
        })
    }
}

module.exports.deleteAUser = (req, res, next) => {
    try {
        const { id } = req.params
        const findUser = usersData.filter(user => user.id !== Number(id));
        res.status(200).json({
            status: true,
            message: "Succesfully Save User",
            data: findUser,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
    }
}
