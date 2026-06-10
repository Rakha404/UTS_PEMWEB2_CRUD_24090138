import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua event
export const getEvent = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        category: true,
        pembicara: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data event",
      error,
    });
  }
};

// 2. Menyimpan event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      location,
      dateEvent,
      categoryId,
      pembicaraId,
    } = req.body;

    if (
      !name||
      !description ||
      !location ||
      !dateEvent ||
      !categoryId ||
      !pembicaraId
    ) {
      return res.status(400).json({
        message: "Semua field wajib diisi",
      });
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        description,
        location,
        dateEvent: new Date(dateEvent),
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId),
      },
    });

    res.status(201).json({
      message: "Event berhasil ditambahkan",
      event: newEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan event",
      error,
    });
  }
};

// 3. Menampilkan event berdasarkan id
export const showEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
        pembicara: true,
      },
    });

    if (!event) {
      return res.status(404).json({
        message: "Event tidak ditemukan",
      });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil detail event",
      error,
    });
  }
};

// 4. Mengupdate event
export const updateEvents = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      location,
      dateEvent,
      categoryId,
      pembicaraId,
    } = req.body;

    const updatedEvent = await prisma.event.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        location,
        dateEvent: new Date(dateEvent),
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId),
      },
    });

    res.json({
      message: "Event berhasil diupdate",
      event: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengupdate event",
      error,
    });
  }
};

// 5. Menghapus event
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.event.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Event berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus event",
      error,
    });
  }
};