import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // o la IP de tu servidor de BD
      port: 3306,
      username: 'root', // ej. 'root'
      password: '',
      database: 'frappes', // El nombre que le diste a tu BD
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Descubre entidades automáticamente
      synchronize: true, // En desarrollo, crea las tablas si no existen. Poner en 'false' en producción.
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
