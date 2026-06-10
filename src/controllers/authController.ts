import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// REGISTER
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Email, password, dan name wajib diisi",
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(409).json({
        message: "Email sudah digunakan",
      });
    }
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
        foto: "",
      },
});
    return res.status(201).json({
      message: "Register berhasil",
      data: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
  console.log(error);

  return res.status(500).json({
    message: "Terjadi kesalahan server",
    error,
  });
}
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password wajib diisi",
      });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Email atau password salah",
      });
    }
    return res.status(200).json({
      message: "Login berhasil",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true },
    });
    return res.status(200).json({
      message: "Berhasil mengambil data users",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: { id: true, email: true, name: true },
    });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    return res.status(200).json({
      message: "Berhasil mengambil data user",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, name } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!existingUser) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        email: email ?? existingUser.email,
        name: name ?? existingUser.name,
        password: password ?? existingUser.password,
      },
    });
    return res.status(200).json({
      message: "Berhasil mengupdate user",
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!existingUser) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.status(200).json({ message: "Berhasil menghapus user" });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};