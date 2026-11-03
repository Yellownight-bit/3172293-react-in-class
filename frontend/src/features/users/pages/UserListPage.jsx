// src/users/pages/UserListPage.js

import { DataTable } from "@/shared";
import { UserColumns } from "../table/UserColumns";
import { Button } from "../../../shared";
import { Link } from "react-router-dom";
import ReportConfigModal from "../reports/components/ReportConfigModal";
import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userServices.js";

export default function UserListPage() {

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.error("Error al cargar los usuarios:", error);
            }
        };

        loadUsers();
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Listador de Usuarios</h1>

                <div className="flex gap-12">
                    <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setIsReportModalOpen(true)}
                    >
                        Reportar usuario
                    </Button>

                    <Link to="/dashboard/userCreate">
                        <Button size="sm" variant="primary">
                            Crear usuario
                        </Button>
                    </Link>
                </div>
            </div>

            <DataTable data={users} columns={UserColumns} />

            <ReportConfigModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
            />

        </div>
    );
}