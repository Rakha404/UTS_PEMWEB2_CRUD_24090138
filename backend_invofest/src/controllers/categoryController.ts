import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua category event
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data category event",
      error,
    });
  }
};

// 2. Menyimpan category event
export const createCategories = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Nama category event wajib diisi",
      });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    res.status(201).json({
      message: "Category event berhasil ditambahkan",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan category event",
      error,
    });
  }
};

// 3. Menampilkan category event berdasarkan id
export const showCategories = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category event tidak ditemukan",
      });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil detail category event",
      error,
    });
  }
};

// 4. Mengupdate category event
export const updateCategories = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Nama category event wajib diisi",
      });
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    res.json({
      message: "Category event berhasil diupdate",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengupdate category event",
      error,
    });
  }
};

// 5. Menghapus category event
export const deleteCategories = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Category event berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus category event",
      error,
    });
  }
};