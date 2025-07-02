import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const UsersTable = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {

        };

        fetchUsers();
    }, []);

    const users = [
        {
            id: "user000123",
            name: "Rohan Paul",
            email: "rohanpaul123@gmail.com",
            role: "user",
            emailVerified: true,
            premium: false,
            decline: true,
            createdAt: "2025-06-15T14:32:00Z",
            action: "block"
        },
        {
            id: "user000124",
            name: "Anita Das",
            email: "anitadas99@email.com",
            role: "admin",
            emailVerified: true,
            premium: true,
            decline: false,
            createdAt: "2025-06-10T09:21:00Z",
            action: "delete"
        },
        {
            id: "user000125",
            name: "Karan Mehta",
            email: "karan.m@email.com",
            role: "user",
            emailVerified: false,
            premium: false,
            decline: false,
            createdAt: "2025-05-30T17:58:00Z",
            action: "suspend"
        },
        {
            id: "user000126",
            name: "Priya Sharma",
            email: "priya.sharma@email.com",
            role: "user",
            emailVerified: true,
            premium: true,
            decline: false,
            createdAt: "2025-06-01T11:15:00Z",
            action: "block"
        },
        {
            id: "user000127",
            name: "Devraj Singh",
            email: "devraj@email.com",
            role: "admin",
            emailVerified: true,
            premium: true,
            decline: false,
            createdAt: "2025-06-20T10:43:00Z",
            action: "suspend"
        },
        {
            id: "user000128",
            name: "Nikita Roy",
            email: "nikita@email.com",
            role: "user",
            emailVerified: false,
            premium: false,
            decline: true,
            createdAt: "2025-06-11T08:01:00Z",
            action: "delete"
        },
        {
            id: "user000129",
            name: "Amit Ranjan",
            email: "amitranjan@email.com",
            role: "user",
            emailVerified: true,
            premium: false,
            decline: false,
            createdAt: "2025-06-25T19:00:00Z",
            action: "block"
        },
        {
            id: "user000130",
            name: "Sonal Verma",
            email: "sonalv@email.com",
            role: "admin",
            emailVerified: true,
            premium: true,
            decline: false,
            createdAt: "2025-06-18T12:22:00Z",
            action: "suspend"
        },
        {
            id: "user000131",
            name: "Imran Hussain",
            email: "imran@email.com",
            role: "user",
            emailVerified: false,
            premium: false,
            decline: true,
            createdAt: "2025-06-05T16:45:00Z",
            action: "delete"
        },
        {
            id: "user000132",
            name: "Meena Kapoor",
            email: "meena.kapoor@email.com",
            role: "admin",
            emailVerified: true,
            premium: true,
            decline: false,
            createdAt: "2025-06-14T07:11:00Z",
            action: "block"
        },
        {
            id: "user000133",
            name: "Rahul Jain",
            email: "rahulj@email.com",
            role: "user",
            emailVerified: false,
            premium: false,
            decline: false,
            createdAt: "2025-06-02T13:03:00Z",
            action: "suspend"
        },
        {
            id: "user000134",
            name: "Surbhi Mishra",
            email: "surbhi@email.com",
            role: "user",
            emailVerified: true,
            premium: false,
            decline: true,
            createdAt: "2025-06-08T21:26:00Z",
            action: "delete"
        }
    ];

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Subscription</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.emailVerified ? "Yes" : "No"}</TableCell>
                        <TableCell>{user.premium ? "Yes" : "No"}</TableCell>
                        <TableCell>
                            {user.decline ? (
                                <span className="text-red-500">Declined</span>
                            ) : (
                                <span className="text-green-500">Approved</span>
                            )}
                        </TableCell>
                        <TableCell>
                            {user.createdAt}
                        </TableCell>
                        <TableCell>
                            <Button className="w-full btn-vintage">{user.action}</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default UsersTable;