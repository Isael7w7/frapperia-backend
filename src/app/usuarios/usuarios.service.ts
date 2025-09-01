import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    // Aquí deberías hashear la contraseña antes de guardarla
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }
  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ idUsuario: id });
    if (!usuario)
      throw new NotFoundException(`Usuario con ID #${id} no encontrado.`);
    return usuario;
  }
  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.usuarioRepository.preload({
      idUsuario: id,
      ...updateUsuarioDto,
    });
    if (!usuario)
      throw new NotFoundException(`Usuario con ID #${id} no encontrado.`);
    return this.usuarioRepository.save(usuario);
  }
  async remove(id: number): Promise<void> {
    const result = await this.usuarioRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Usuario con ID #${id} no encontrado.`);
  }
}
